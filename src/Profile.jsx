import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  const nav = useNavigate();
  let [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);
  const [profile, setprofile] = useState("");
  console.log(user);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          "https://6557461abd4bcef8b6125cf6.mockapi.io/user"
        );
        const res = response.data.map((value) => {
          if (user.Email === value.Email && user.Password === value.Password) {
            setLogin(true);
            setprofile(value);
          }
        });
      } catch (error) {
        alert("Smothing went wrong please login again");
      }
    };
    fetchItem();
  }, []);

  const handleClick = () => {
    setLogin(false);
    nav("/Meal");
  };
  return (
    <>
      <div className="containerProfile">
        <h1>
          <i class="fa-solid fa-user"></i>
        </h1>
        <h4>USER</h4>
      <div className="containerProfile1">
          <div className="userDetails">{profile.firstName} { profile.lastName}</div>
          <div className="userDetails">{profile.Email}</div>
          <div className="userDetails">Mobile number: {profile.mobileNumber}</div>
      </div>
        <span onClick={handleClick}>Logout</span>
      </div>
    </>
  );
}
export default Profile;
