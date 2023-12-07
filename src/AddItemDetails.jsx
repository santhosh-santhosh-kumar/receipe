import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Details.css";

function AddItemDetails() {
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
            `http://localhost:3501/addItems`
          );
          if (response.data == null) {
            throw Error("Items not found");
          }
          setDetails(response.data);
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
      {fetchError ? <p>{fetchError}</p>:
      details.map((item) => {
        const instructArray = item.strInstructions;
        if(item.mealName==id){
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
                              to={`/category/${item.category}`}
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
                          src={item.imageUrl}
                          class="card-img-top1"
                          style={{ width: "400px", height: "400px" }}
                        />
                        <i class="fa-regular fa-bookmark fa-bookmark1"></i>
                      </div>
                      <div className="col-8">
                        <h3>{item.mealName}</h3>
                        <hr></hr>
                        <h5 className="catagory">CATEGORY: {item.category}</h5>
                        <h6 className="source">SOURCE: {item.source}</h6>
                        <div className="Ingredients">
                          <h6>Ingredients</h6>
                          <div className="detailList1">
                            <ul>
                              {Object.keys(item).forEach((key, index) => {
                                if (key.includes("ingrediants")) {
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
                          if (key.includes("measure")) {
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
                    <p>{item.instruction}</p>
                  </div>
                </>
              );
        }

      })}

    </>
  )

  }
export default AddItemDetails