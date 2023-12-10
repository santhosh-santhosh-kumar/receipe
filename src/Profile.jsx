import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [user,setUser]=useState([])
    const [item, setItem,login,setLogin,profile] = useContext(ContextProvide);
    console.log(profile)    
      return (
    <>
      <div className="container containerProfile">
        <div className="row">
            <div className="col-6">
                <div className="profileImg">
                    <img src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg" alt="" />
                </div>
            </div>
            <div className="col-6">
                <div className="profileContent">
                 <h1><i class="fa-solid fa-user"></i></h1>
                 <h4>Member Login</h4>
                 {profile.map((item)=>{
                    console.log(item)
                    return (
                        <>
                        <h4>item</h4>
                        <h4>sfdsf</h4>
                        </>
                    )
                 })}
                </div>
                <p></p>
            </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
