import React, { useState } from "react";
import Meallist from "./Meallist";
import Nav from "./Nav";
import { Link } from "react-router-dom";
function Meal() {
  const [search,setSearch]=useState('')
  return (
    <>
      <Nav></Nav>
      <div className="main">
        <div className="heading1">
          <div className="searchBar">
            <input
              type="text"
              className="searchInput"
              placeholder="Search receipe here"
              onChange={(e)=>setSearch(e.target.value)}
            ></input>
            <Link to={`/category/${search}`}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
            <div className="navText">
            <h2 className="homeHeading">What are your favorite cuisines?</h2>
            <h5 className="homeText">personalize your experience</h5>
            </div>
          </div>
        </div>
      </div>
      <Meallist></Meallist>
    </>
  );
}

export default Meal;
