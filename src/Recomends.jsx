import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NewItem from "./NewItem.jsx";
import "./Category.css";
import "./Recomends.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";

function Recomends() {
  const [item, setItem, login, setLogin, user, setUser] =
    useContext(ContextProvide);

  return (
    <>
    <div className="recomends">
      <span>Recommended for you:</span>
      <div className="container homeContainer1">
        <div className="row">
          {item.map((item,index) => {
            if(index<12){
                return (
                    <div className="col-2">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/${item.strCategory}`}
                      >
                        <div class="card" style={{ width: "15rem;" }}>
                          <img
                            src={item.strCategoryThumb}
                            class="card-img-top"
                            alt="..."
                          />
                          <div class="card-body">
                            <p class="card-title mealCardTitle">{item.strCategory}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
      
                
            }


          })}
        </div>
      </div>
      </div>
    </>
  );
}

export default Recomends;
