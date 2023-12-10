import React from 'react';
import "./login.css";
import { useFormik } from "formik";
import axios from 'axios';
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useNavigate } from "react-router-dom";


function Login() {
    const [item, setItem,login,setLogin,profile] = useContext(ContextProvide);
    const nav = useNavigate();
    console.log(login)
  const formik=useFormik({
        initialValues:{
            Email:"",
            Password:""
        },
        validate:(values)=>{
          let error={}
          if(values.Email===""){
          error.Email="*Please enter the email*"
          }else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
          ) {
            error.Email = 'Invalid email address';
          }
          if(values.Password===""){
            error.Password="*Please enter the password*"
          }
          return error
        },
        onSubmit:async (values)=>{
            try{
                const response=await axios.get("https://6557461abd4bcef8b6125cf6.mockapi.io/user")
//                console.log(response.data[0])
                response.data.map((value)=>{
                    if(values.Email===value.Email&&values.Password==value.Password){
                        alert('Login successfully')
                        setLogin(true)
                        profile=[]
                        profile.push(response.data)
                        nav('/Meal')
                        
                    }})

            }catch(error){
                console.log(error)
            }
          }
    })
  return (
    <>
    <div className='login'>
        <div className='signUp'>            
            <form onSubmit={formik.handleSubmit}>
                <label for='Email' id='Email'>Email:</label><br></br>
                <input type='text' name='Email' value={formik.values.Email} onChange={formik.handleChange}></input><br></br>
                <span style={{color:"red"}}>{formik.errors.Email}</span><br></br>
                <label for='password' id="password">Password:</label><br></br>
                <input type='text' name='Password' value={formik.values.Password} onChange={formik.handleChange}></input><br></br>
                <span style={{color:"red"}}>{formik.errors.Password}</span><br></br>
                <input type='submit' value={"submit"} className="inputButton" />
            </form>
        </div>
    </div>
    </>
  )
}

export default Login