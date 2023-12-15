import React from 'react';
import { Link, Route,Routes, useNavigate } from 'react-router-dom';
import Meal from '../HomePage/Meal';
import Meallist from '../HomePage/Meallist';
import './Header.css';


function Header() {
  return (
    <>
    <header className='header'>
      <div className='header-content'>
        <div className='content'><br></br><br></br><br></br><br></br><br></br>
        <h1 className='heading'>What are your favorite cuisines? <span></span></h1>
        <h5 className='text'>personalize your experience <span></span></h5>
        <Link style={{textDecoration: 'none'}} to={'/Meal'}><h2 className='start'>Get Started</h2></Link>
        </div>
      </div>
      </header>
    </>
  )
}

export default Header