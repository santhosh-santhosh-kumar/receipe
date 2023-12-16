import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import Profile from "../Login/Profile";
import { useEffect } from "react";
import axios from "axios";

function Nav() {
  const [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);
    const [count,setCount]=useState("")
  const [userName,setUserName]=useState("")
  const [details,setDetails]=useState("")
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
          console.log(error.message)
        }
      };
      fetchItem();
    }, []);
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get(
            "https://6557461abd4bcef8b6125cf6.mockapi.io/practice"
          );
          if (response.data == null) {
            throw Error("No Items");
          }
          setCount(response.data);
        } catch (err) {
          setCount(0)  
        } 
  
      };
      fetchItems();
    },[]);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await axios.get(
            `https://657650fa0febac18d403d1fc.mockapi.io/login`
          );
          if (response.data == null) {
            throw Error("Items not found");
          }
          setDetails(response.data);
        } catch (err) {
        } finally {
        }
      };
      fetchItems();
    }, []);
  
  
  return (
    <>
      <div className="navBar">
        <ul>
          <li className="logo">
            <Link className="navbar-brand" to={"/Meal"}>
              <p className="title">EATERY</p>
            </Link>
          </li>
          <div className="container">
            <div className="row">
              <div className={`col navBarCol ${login ? "topList1" : ""}`}>
                <li>
                  <Link to={"/addReceipe"} className="nav-link home" href="#">
                    Add Receipe
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/yourList"} className="nav-link" href="#">
                    Your Receipe {login && <span className="count">{count.length}</span>}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/saved"} className="nav-link" href="#">
                    Saved{login && <span className="count">{details.length}</span>}
                  </Link>
                </li>
                <li>
            <Link to={`/${login ? "Profile" : "login"}`} className="nav-link">
              {login ? (
                <>
                  <i className="fa-solid fa-user navUser"></i>
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
