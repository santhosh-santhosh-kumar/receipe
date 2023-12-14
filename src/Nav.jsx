import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import Profile from "./Profile";
import { useEffect } from "react";
import axios from "axios";

function Nav() {
  const [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);
  const [userName,setUserName]=useState("")
    useEffect(() => {
      const fetchItem = async () => {
        try {
          const response = await axios.get(
            "https://6557461abd4bcef8b6125cf6.mockapi.io/user"
          );
          const res = response.data.map((value) => {
            if (user.Email === value.Email && user.Password === value.Password) {
              setLogin(true);
              setUserName(value.firstName);
            }
          });
        } catch (error) {
          alert("Smothing went wrong please login again");
        }
      };
      fetchItem();
    }, []);
  
  return (
    <>
      <div className="navBar">
        <ul>
          <li className="logo">
            <Link class="navbar-brand" to={"/Meal"}>
              <p className="title">EATERY</p>
            </Link>
          </li>
          <div className="container">
            <div className="row">
              <div className={`col navBarCol ${login ? "topList1" : ""}`}>
                <li>
                  <Link to={"/addReceipe"} class="nav-link home" href="#">
                    Add Receipe
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/yourList"} class="nav-link" href="#">
                    Your Receipe
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/saved"} class="nav-link" href="#">
                    Saved
                  </Link>
                </li>
                <li>
            <Link to={`/${login ? "Profile" : "login"}`} class="nav-link">
              {login ? (
                <>
                  <i class="fa-solid fa-user navUser"></i>
                  <span className="loginUser">{userName}</span>
                </>
              ) : (
                "Login"
              )}
            </Link>
          </li>

              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Nav;
