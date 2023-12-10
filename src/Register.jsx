import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      <div className="login">
        <div className="Register">
          <h3>Login Form</h3>
          <form className="registerDetails" onSubmit={formik.handleSubmit}>
            <label id="firstName">FirstName:</label>
            <br></br>
            <input
              type="text"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            ></input>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.firstName}</span>
            <br></br>
            <label id="lastName">LastName:</label>
            <br></br>
            <input
              type="text"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            ></input>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.lastName}</span>
            <br></br>
            <label id="mobileNumber">Mobile Number:</label>
            <br></br>
            <input
              type="text"
              name="mobileNumber"
              onChange={formik.handleChange}
              value={formik.values.mobileNumber}
            ></input>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.mobileNumber}</span>
            <br></br>
            <label for="Email" id="Email">
              Email:
            </label>
            <br></br>
            <input
              type="text"
              name="Email"
              onChange={formik.handleChange}
              value={formik.values.Email}
            ></input>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.Email}</span>
            <br></br>
            <label id="password">Password:</label>
            <br></br>
            <input
              type="text"
              name="Password"
              onChange={formik.handleChange}
              value={formik.values.Password}
            ></input>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.Password}</span>
            <br></br>
            <label id="conformPassword">Conform Password:</label>
            <br></br>
            <input
              type="text"
              name="conformPassword"
              onChange={formik.handleChange}
              value={formik.values.conformPassword}
            ></input>
            <br></br>
            <span style={{ color: "red" }}>{formik.errors.conformPassword}</span>
            <br></br>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
