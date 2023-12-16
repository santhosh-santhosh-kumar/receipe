import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Register.css";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import "./login.css";

function UpdateProfile() {
  const nav = useNavigate();
  const {id}=useParams()
  console.log(id)
  const [data,setData]=useState([])
  const [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);

useEffect(()=>{
    const fetchItems=async ()=>{
        try{
                const response = await axios.get(
                    "https://6557461abd4bcef8b6125cf6.mockapi.io/user/" + id
                  );
                      if(response.data==null){
                throw Error("something went wrong")
            }
           setData(response.data)
        }catch(error){
            alert(error.message)
         }

    }
    fetchItems();
},[])
  const formik = useFormik({
    initialValues: {
      Email: data.Email,
      Password: data.Password,
      firstName:data.firstName ,
      lastName: data.lastName,
      mobileNumber:data.mobileNumber,
      conformPassword: data.conformPassword,
    },
    validate: (values) => {
      let error = {};
      console.log(values.Email)
      if (values.firstName === "") {
        error.firstName = "*Please enter the first name*";
      } else if (values.firstName.length < 4 || values.firstName.length > 25) {
        error.firstName =
          "*First name should be above 3 chars and below 25 chars*";
      } else if (!/^[A-Za-z ]*$/.test(values.firstName)) {
        error.firstName = "*First name should be in chars*";
      }

      if (values.lastName === "") {
        error.lastName = "*Please enter the last name*";
      } else if (values.lastName.length < 1 || values.firstName.length > 15) {
        error.lastName =
          "*Last name should be above 1 char and below 15 chars*";
      } else if (!/^[A-Za-z ]*$/.test(values.lastName)) {
        error.lastName = "*Last name should be in chars*";
      }

      if (values.mobileNumber === "") {
        error.mobileNumber = "*Please enter the mobile number*";
      } else if (
        values.mobileNumber.length < 10 ||
        values.mobileNumber.length > 10
      ) {
        error.mobileNumber = "*Mobile number should contains 10 numbers*";
      } else if (!/^\d{10}$/.test(values.mobileNumber)) {
        error.mobileNumber = "*Please Enter numbers only*";
      }

      if (values.Email === "") {
        error.Email = "*Please enter the email*";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
      ) {
        error.Email = "Invalid email address";
      }
      if (values.Password === "") {
        error.Password = "*Please enter the password*";
      } else if (values.Password.length < 8) {
        error.Password = "*Password must be 8 letters*";
      }
      if (values.conformPassword === "") {
        error.conformPassword = "*Please enter the conform password*";
      } else if (values.Password !== values.conformPassword) {
        error.conformPassword = "*Please enter the same password*";
      }

      return error;
    },
    onSubmit: async (values) => {
    try {
        await axios.put(
          "https://6557461abd4bcef8b6125cf6.mockapi.io/user/"+id,
          values
        );
        nav("/Meal");
      } catch (error) {
        alert(error.message)
      }
    },
  });

  const handleNavigate = () => {
    nav("/Meal");
  };
  
  return (
    <>
      <div className="mainRegister">
        <div className="register">
          <div className="page">
            <i className="fa-solid fa-user"></i>
            <p>Register</p>
          </div>

          <form className="registerDetails" onSubmit={formik.handleSubmit}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder="First name"
                  ></input>
                  <span style={{ color: "red" }}>
                    {formik.errors.firstName}
                  </span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder="Last name"
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.lastName}</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="mobileNumber"
                    onChange={formik.handleChange}
                    value={formik.values.mobileNumber}
                    placeholder="Mobile number"
                  ></input>
                  <span style={{ color: "red" }}>
                    {formik.errors.mobileNumber}
                  </span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="Email"
                    onChange={formik.handleChange}
                    value={formik.values.Email}
                    placeholder="Email"
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.Email}</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="Password"
                    onChange={formik.handleChange}
                    value={formik.values.Password}
                    placeholder="Password"
                  ></input>
                  <span style={{ color: "red" }}>{formik.errors.Password}</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="conformPassword"
                    onChange={formik.handleChange}
                    value={formik.values.conformPassword}
                    placeholder="Conform Password"
                  ></input>
                  <span style={{ color: "red" }}>
                    {formik.errors.conformPassword}
                  </span>
                </div>
              </div>
            </div>
            <ul className="registerUl">
              <li>
                <button type="submit" className="registerButton">
                  Register
                </button>
              </li>
              <li>
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <button className="registerButton1">Login</button>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>

      {/* <div className={`notification ${login ? "notification1" : ""}`}>
        <p className="sucess">successfully</p>
        <p>
          <i className="fa-solid fa-check"></i>
        </p>
        <span className="close" onClick={handleNavigate}>
          Continue
        </span>
      </div> */}
    </>
  );
}

export default UpdateProfile;
