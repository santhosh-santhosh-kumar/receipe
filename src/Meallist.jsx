import React from "react";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { Link } from "react-router-dom";
import Category from "./Category";

function Meallist() {
  const [item, setItem] = useContext(ContextProvide);
  return (
    <>
      <div className="container homeContainer">
        <div className="row">
          {item.map((item) => {
            return (
              <div className="col-3">
                                  <Link style={{textDecoration: 'none'}} to={`/category/${item.strCategory}`} >

                <div class="card mealCard" style={{ width: "20rem;" }}>
                  <img src={item.strCategoryThumb} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-title mealCardTitle">{item.strCategory}</p>
                  </div>
                </div>
                </Link>

              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Meallist;
