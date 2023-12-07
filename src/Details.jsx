import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Details.css";
import AddItemDetails from "./AddItemDetails";

function Details() {
  const ingredientsDetails = [];
  const ingredientsMeasure = [];
  const includesArray = [];
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${id}`
        );
        if (response.data.meals == null) {
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

  return (
    <>
      {load && <p>Loading...</p>}
      {fetchError ? <AddItemDetails />:
      details.map((item) => {
        const instructArray = item.strInstructions;
        let array = instructArray.split(".");
        return (
          <>
            <div className="container navBarDetails">
              <div className="row">
                <div className="col-3 navDetails">
                  <ul>
                    <li>
                      <Link to={"/Meal"}>
                        <i class="fa-solid fa-house"></i>
                      </Link>
                    </li>
                    <li>
                      <i class="fa-solid fa-chevron-right"></i>
                      <i class="fa-solid fa-chevron-right"></i>
                    </li>
                    <li>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/category/${item.strCategory}`}
                      >
                        <h6 className="pageCategory">CATEGORY</h6>
                      </Link>
                    </li>
                    <li>
                      <i class="fa-solid fa-chevron-right"></i>
                      <i class="fa-solid fa-chevron-right"></i>
                    </li>
                    <li>
                      <h6 className="pageCategory">DETAILS</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-5">
                  <h4 className="detailsHead">Meal Details</h4>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <img
                    src={item.strMealThumb}
                    class="card-img-top1"
                    style={{ width: "400px", height: "400px" }}
                  />
                  <i class="fa-regular fa-bookmark fa-bookmark1"></i>
                </div>
                <div className="col-8">
                  <h3>{item.strMeal}</h3>
                  <hr></hr>
                  <h5 className="catagory">CATEGORY: {item.strCategory}</h5>
                  <h6 className="source">SOURCE: {item.strSource}</h6>
                  <div className="Ingredients">
                    <h6>Ingredients</h6>
                    <div className="detailList1">
                      <ul>
                        {Object.keys(item).forEach((key, index) => {
                          if (key.includes("strIngredient")) {
                            ingredientsDetails.push(item[key]);
                          }
                        })}
                        {ingredientsDetails.map((data) => {
                          if (data != "") {
                            return <li>{data}</li>;
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Measure">
              <h4>Measure</h4>
              <div className="detailList2">
                <ul>
                  {Object.keys(item).forEach((key, index) => {
                    if (key.includes("strMeasure")) {
                      ingredientsMeasure.push(item[key]);
                    }
                  })}
                  {ingredientsMeasure.map((data) => {
                    if (data != "") {
                      return <li>{data}</li>;
                    }
                  })}
                </ul>
              </div>
            </div>
            <div className="instruct">
              <h4>Instructions</h4>
              <ul>
                {array.map((data) => {
                  return <li>{data}</li>;
                })}
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Details;
