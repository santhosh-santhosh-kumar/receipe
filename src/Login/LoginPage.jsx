import React, { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import "./LoginPage.css";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const nav = useNavigate();
    const [view, setView] = useState("Login");
    const [item, setItem,login,setLogin,user,setUser] = useContext(ContextProvide);

  return (
    <>
      { <div className="loginMain">
        <div className="loginPage">
          <div className="back">
            <div className="page">
            <i className="fa-solid fa-user"></i>
            <p>Login</p>
            </div>
            <div className="pages">
            {view == "Login" ? <Login user={user} setUser={setUser} /> : <Register />}
            </div>
        </div>
        </div>
      </div>}
    </>
  );
}

export default LoginPage;
