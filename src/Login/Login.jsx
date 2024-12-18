import React from 'react';
import "./login.css";
import { useFormik } from "formik";
import axios from 'axios';
import { useContext } from "react";
import { ContextProvide } from "../Context";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Login() {
  const nav = useNavigate();
  const [item, setItem,login,setLogin,user,setUser] = useContext(ContextProvide);
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
          let passwordOk=false;
            try{
                const response=await axios.get("https://6557461abd4bcef8b6125cf6.mockapi.io/user")                
                const res=response.data.map((value)=>{
                    if(values.Email===value.Email&&values.Password===value.Password){
                        setLogin(true)
                        passwordOk=true;
                    }})
            }catch(error){
                alert("Smothing went wrong")
            }
            if(passwordOk==false){
              alert('Wrong password')
            }
          }
    })
    setUser(formik.values)
    const handleNavigate=()=>{
      nav('/Meal')
    }
  return (
    <>
    <div className='login'>
        <div className='signUp'>            
            <form onSubmit={formik.handleSubmit}>
                <input type='text' name='Email' value={formik.values.Email} onChange={formik.handleChange} placeholder='Email'></input><br></br>
                <span style={{color:"red"}}>{formik.errors.Email}</span><br></br>
                <input type='text' name='Password' value={formik.values.Password} onChange={formik.handleChange} placeholder='Password'></input><br></br>
                <span style={{color:"red"}}>{formik.errors.Password}</span><br></br>
                <div className='loginButton'>
                <button type='submit' value={"submit"} className="inputLogin" >Login</button>
                <Link to={"/register"}><button type='submit' value={"submit"} className="inputRegister" >Register</button></Link>
                </div>
            </form>
        </div>
    </div>
    
    <div className={`notification ${login ? "notification1":""}`}>
          <p className='sucess'>successfully</p>
          <p><i className="fa-solid fa-check"></i></p>
          <span className='close' onClick={handleNavigate}>Continue</span>
        </div>

    </>
  )
}
export default Login