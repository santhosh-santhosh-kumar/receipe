import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Details.css";
import AddItemDetails from "../Additems/AddItemDetails";
import Recomends from "../Recomends/Recomends";

function Details() {
  const ingredientsDetails = [];
  const ingredientsMeasure = [];
  const [list, setList] = useState("Ingredients");
  const [details, setDetails] = useState([]);
  let { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
        );
        if (!response.data.meals) {
          throw Error("Items not found");
        }
        setDetails(response.data.meals);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchItems();
  }, []);
  console.log(fetchError)
  return (
    <>
      {load && <p>Loading...</p>}
      {fetchError ? ( 
        <AddItemDetails />
      ) : ( details.map((item) => {
          const instructArray = item.strInstructions;
          let array = instructArray.split(".");
          if(item.strMeal===id){
            return (
              <>
                <div className="container navBarDetails">
                  <div className="row">
                    <div className="col-3 navDetails">
                      <ul>
                        <li>
                          <Link to={"/Meal"}>
                            <i className="fa-solid fa-house"></i>
                          </Link>
                        </li>
                        <li>
                          <i className="fa-solid fa-chevron-right"></i>
                          <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/${item.strCategory}`}
                          >
                            <h6 className="pageCategory">CATEGORY</h6>
                          </Link>
                        </li>
                        <li>
                          <i className="fa-solid fa-chevron-right"></i>
                          <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                          <h6 className="pageCategory">{item.strCategory}</h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <span className="detailsHead">{item.strMeal}</span>
                <div className="container detailsContainer">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={item.strMealThumb}
                        className="card-img-top1"
                        style={{ width: "400px", height: "400px" }}
                      />
                      <i className="fa-regular fa-bookmark fa-bookmark1"></i>
                    </div>
                    <div className="col-8">
                      <div className="listOfDetails">
                        <ul>
                          <li onClick={() => setList("Ingredients")} className={list === "Ingredients" ? "active2" : ""}>
                            Ingredients
                          </li>
                          <li onClick={() => setList("Measure")} className={list === "Measure" ? "active2" : ""}>Measure</li>
                          <li onClick={() => setList("Instructions")} className={list === "Instructions" ? "active2" : ""}>
                            Instructions
                          </li>
                        </ul>
                      </div>
                      <hr className="detailsHr"></hr>
  
                      {list == "Ingredients" && (
                        <div className="Ingredients">
                          <div className="detailList1">
                            <ul>
                              {Object.keys(item).forEach((key, index) => {
                                if (key.includes("strIngredient")) {
                                  ingredientsDetails.push(item[key]);
                                }
                              })}
                              {ingredientsDetails.map((data) => {
                                if (data != ""&&data != " "&&data !=null) {
                                  return <li><i className="fa-solid fa-check"></i>{data}</li>;
                                }
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                      {list == "Measure" && (
                        <div className="Measure">
                          <div className="detailList2">
                            <ul>
                              {Object.keys(item).forEach((key, index) => {
                                if (key.includes("strMeasure")) {
                                  ingredientsMeasure.push(item[key]);
                                }
                                if (key.includes("strIngredient")) {
                                  ingredientsDetails.push(item[key]);
                                }
                              })}
                              {ingredientsMeasure.map((data, i) => {
                                if (data != " "&&data != ""&&data !=null) {                                
                                return (
                                  <li className="intList">
                                    <i className="fa-solid fa-spoon"></i>
                                    {` : ${data}`}g
                                  </li>
                                );
         
                                }
                       })}
                            </ul>
                          </div>
                        </div>
                      )}
                      {list == "Instructions" && (
                        <div className="instruct">
                          <ul>
                            {array.map((data) => {
                                if (data != ""&&data != " ") {
                                  return <li className="listDot">{data}</li>;
                                }
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <Recomends />

                </div>
              </>
            );    
          }
        })
      )}
    </>
  );
}

export default Details;
