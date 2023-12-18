import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Details/Details.css"

function AddItemDetails() {
  const [list, setList] = useState("Ingredients");
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://6557461abd4bcef8b6125cf6.mockapi.io/practice`
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
      {fetchError ? (
        <p>{fetchError}</p>
      ) : (
        details.map((item) => {
          const instructArray = item.addIngrediants;
          console.log(id)
          let nameMeal=id.slice(0,id.length)
          console.log(nameMeal)
          if (item.id == nameMeal) {
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
                            to={`/Yourlist`}
                          >
                          <h6 className="pageCategory">YOURLIST</h6>
                          </Link>
                        </li>


                        <li>
                          <i className="fa-solid fa-chevron-right"></i>
                          <i className="fa-solid fa-chevron-right"></i>
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
                    <span className="detailsTitle">{item.MealName}</span>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <img
                        src={item.image ? item.image :"https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"}
                        alt="receipe image"
                        className="card-img-top1"
                        style={{ width: "400px", height: "400px" }}
                      />
                    </div>
                    <div className="col-8">
                      <hr></hr>
                      <div className="listOfDetails">
                        <ul>
                          <li
                            onClick={() => setList("Ingredients")}
                            className={list === "Ingredients" ? "active2" : ""}
                          >
                            Ingredients
                          </li>
                          <li
                            onClick={() => setList("Measure")}
                            className={list === "Measure" ? "active2" : ""}
                          >
                            Measure
                          </li>
                          <li
                            onClick={() => setList("Instructions")}
                            className={list === "Instructions" ? "active2" : ""}
                          >
                            Instructions
                          </li>
                        </ul>
                      </div>
                      <hr className="hrTag"></hr>

                      {list == "Ingredients" && (
                        <div className="Ingredients">
                          <div className="detailList1">
                            <ul>
                              {item.addIngrediants.map((data) => {
                                  return (
                                    <li>
                                      <i className="fa-solid fa-check"></i> {data}
                                    </li>
                                  );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}

                      {list == "Measure" && (
                        <div className="Measure">
                          <div className="detailList2">
                            <ul>
                              {item.addMeasure.map((data) => {
                                  return (
                                    <li className="intList">
                                      <i className="fa-solid fa-spoon"></i>
                                      {` : ${data}`}
                                    </li>
                                  );
                              })}
                            </ul>
                          </div>
                        </div>
                      )}
                      {list == "Instructions" && (
                        <div className="instruct">
                          <p>{item.Instructions}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })
      )}
    </>
  );
}
export default AddItemDetails;
