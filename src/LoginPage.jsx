import React, { useEffect, useState } from "react";
import Register from "./Register";
import Login from "./Login";
import "./LoginPage.css";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const nav = useNavigate();
    const [view, setView] = useState("Login");
    const [item, setItem,login,setLogin] = useContext(ContextProvide);

  return (
    <>
      {login ? useEffect=()=>{nav('/Profile')} : <div className="loginMain">
        <div className="loginPage">
            <div className="page">
            <h5 onClick={() => setView("Login")}>Login</h5>
          <h5 onClick={() => setView("Register")}>Register</h5>                
            </div>
            <div className="pages">
            {view == "Login" ? <Login /> : <Register />}
            </div>
        </div>
      </div>}
    </>
  );
}

export default LoginPage;
