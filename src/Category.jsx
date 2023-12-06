import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useParams } from "react-router-dom";
import "./Category.css";

function Category() {
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load,setLoad]=useState(true)
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        );
        if (response.data.meals==null) {throw Error("Items not found")};
        setCategory(response.data.meals);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }finally{
        setLoad(false)
      }
    };
    fetchItems();
  }, []);
  return (
    <>
          <div className="navDetails">
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
                <h6 className="pageCategory">CATEGORY</h6>
              </li>
            </ul>
          </div>

      <div className="container cetegoryContainer">
        <h4 className="cetegoryHeading">MEALS</h4>
          <div className="row categoryRow">
          {load && <p>Loading...</p>}
        {fetchError && <p>{fetchError}</p>}
            {
                category.map((item) => {
                return (
                  <div className="col-3 categoryCol">
                    <div
                      class="card"
                      style={{ width: "1rem !important;", height: "27.5rem"}}
                    >
                      <img
                        src={item.strMealThumb}
                        class="card-img-top"
                        alt="..."
                        style={{height:"300px",width: "100%"}}/>
                        <i class="fa-regular fa-bookmark"></i>
                      <div class="card-body">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.strMeal}`}
                        >
                          <p className="categoryArea">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            </p>
                            <p className="categoryArea"><strong>Tasting the world, one dish at a time</strong></p>
                            <p className="categoryCard">
                            {item.strMeal.length > 19
                              ? item.strMeal.slice(0, 19)
                              : item.strMeal}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
      </div>
    </>
  );
}

export default Category;
