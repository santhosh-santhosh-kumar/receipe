import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";


function Register() {
    const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      Email: "",
      Password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      conformPassword: "",
    },
    validate: (values) => {
      let error = {};
      if (values.firstName === "") {
        error.firstName = "*Please enter the first name*";
      } else if (values.firstName.length < 4) {
        error.firstName = "*First name should be above 3 chars*";
      }
      if (values.lastName === "") {
        error.lastName = "*Please enter the last name*";
      }
      if (values.mobileNumber === "") {
        error.mobileNumber = "*Please enter the mobile number*";
      } else if (values.mobileNumber.length < 10 ||values.mobileNumber.length > 10) {
        error.mobileNumber = "*Mobile number should contains 10 numbers*";
      }
    //   else if(regex.test(values.mobileNumber)){
    //     error.mobileNumber = "*Please Enter numbers only*";
    //   }

      if (values.Email === "") {
        error.Email = "*Please enter the email*";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
      ) {
        error.Email = "Invalid email address";
      }
      if (values.Password === "") {
        error.Password = "*Please enter the password*";
      }else if(values.Password.length<8){
        error.Password = "*Password must be 8 letters*";
      }
      if (values.conformPassword === "") {
        error.conformPassword = "*Please enter the conform password*";
      }else if(values.Password!==values.conformPassword){
        error.conformPassword = "*Please enter the same password*";
      }

      return error;
    },
    onSubmit: async (values) => {
        try{
            await axios.post("https://6557461abd4bcef8b6125cf6.mockapi.io/user",values)
            alert('hello')
            nav('/Meal')
        }catch(error){
            console.log(error)
        }
      console.log(values);
    },
  });

  return (
    <>
      <div className="mainRegister">
        <div className="register">
        <div className="page">
            <i class="fa-solid fa-user"></i>
            <p>Rgister</p>
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
            <span style={{ color: "red" }}>{formik.errors.firstName}</span>
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
            <span style={{ color: "red" }}>{formik.errors.mobileNumber}</span>
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
            <span style={{ color: "red" }}>{formik.errors.conformPassword}</span>
            </div>
            </div>
            </div>

            <button type="submit" className="registerButton">Register</button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
