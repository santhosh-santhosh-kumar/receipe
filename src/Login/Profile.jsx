import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Profile() {
  const nav = useNavigate();
  let [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);
  const [profile, setprofile] = useState("");
  const [logOut, setLogOut] = useState(false);
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
      }
    };
    fetchItem();
  }, []);

  const handleClick = () => {
    setLogOut(true);
  };
  const handleNavigate = () => {
    setLogin(false);
    nav(`/login`);
  };
  const handleCancel = () => {
    nav(`/Meal`);
    setLogOut(false);
  };
  return (
    <>
      <div className="containerProfile">
        <br></br>
        <br></br>
        <br></br>
        <div className="pro">
        <h1>
          <i className="fa-solid fa-user"></i>
        </h1>
        <h4>USER</h4>
        <div className="containerProfile1">
          <div className="userDetails">
            {profile.firstName} {profile.lastName}
          </div>
          <div className="userDetails">{profile.Email}</div>
          <div className="userDetails">{profile.mobileNumber}</div>
        </div>
        <div className="updateSpan">
          <span onClick={handleClick}>Logout</span>
          <Link style={{ textDecoration: "none" }} to={`/profileupdate/${profile.id}`}>
            <span onClick={handleClick}>Edit</span>
          </Link>
        </div>
      </div>
      </div>
      <div className={`notification4 ${logOut ? "notification5" : ""}`}>
        <p className="sucess">Do you want to log out</p>
        <p>
          <i className="fa-solid fa-check"></i>
        </p>
        <span className="close" onClick={handleNavigate}>
          Conform
        </span>
        <span className="close" onClick={handleCancel}>
          Cancel
        </span>
      </div>
    </>
  );
}
export default Profile;
