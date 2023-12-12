import React, { useState } from "react";
import Meallist from "./Meallist";
import Nav from "./Nav";
import { Link, useHref } from "react-router-dom";
function Meal() {
  const [search,setSearch]=useState('')
  const [display,setDisplay]=useState(false)
  const filterArray=["Breakfast","Dessert","Seafood","Chicken","Beef","Lamb","Miscellaneous","Pasta","Pork","Side","Starter","Vegan","Vegetarian","Goat"]
  return (
    <>
      <div className="main">
      <Nav></Nav>

        <div className="heading1">
          <div className="searchBar">
            <input
              type="text"
              className="searchInput"
              placeholder="Search receipe here"
              value={search}
              onChange={(e)=>{
                setSearch(e.target.value)
                setDisplay(true)
              }}
              onClick={(e)=>{
                setDisplay(true)
              }}
              onmouseout={()=>{
                setDisplay(false)
              }

              }
            ></input>
            <Link to={`/category/${search}`}>
            <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
            <div className="navText">
            <h2 className="homeHeading">What are your favorite cuisines?</h2>
            <p className="homeText">personalize your experience</p>
            </div>
          </div>
          <div className={`suggestion ${display===true ? "blockLevel" : "hideLevel"}`}>
            <ul>
              {filterArray.map((item)=>{
                if(item.toLocaleLowerCase().includes(search.toLowerCase())){
                  return (
                    <li onClick={e=>{
                      setSearch(item)
                      setDisplay(false)
                    }}>{item}</li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      <Meallist></Meallist>
    </>
  );
}

export default Meal;
