import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Saved() {
    const [details, setDetails] = useState([]);
    const { id } = useParams();
    const array=[]
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
          array.push(...response.data.meals)
          console.log(array)
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
        <h4 className="cetegoryHeading" style={{textTransform:"uppercase"}}>{id}</h4>
        <div className="row categoryRow">
          {load && <p>Loading...</p>}
          {fetchError && <p>{fetchError}</p>}
          {array.map((item) => {
            console.log(item)
            return (
              <div className="col-3 categoryCol">
                <div
                  class="card"
                  style={{ width: "1rem !important;", height: "27.5rem" }}
                >
                  <img
                    src={item.strMealThumb}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "300px", width: "100%" }}
                  />
                  <Link
                      style={{ textDecoration: "none" }}
                      to={`/saved/${item.strMeal}`}
                    >
                  <i class="fa-regular fa-bookmark"></i>
                  </Link>
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
                      <p className="categoryArea">
                        <strong>Tasting the world, one dish at a time</strong>
                      </p>
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
          })}
        </div>
      </div>

    </>
  )
}

export default Saved