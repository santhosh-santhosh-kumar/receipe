import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import NewItem from "../NewItem/NewItem.jsx";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../Context.jsx";
import Meallist from "./Meallist.jsx";
import Recomends from "../Recomends/Recomends.jsx";

function Category() {
  const { id } = useParams();
  const [item, setItem, login, setLogin, user, setUser] =useContext(ContextProvide);
  const nav = useNavigate();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const records = category.slice(firstPage, lastPage);
  const nPage = Math.ceil(category.length / perPage);
  const number = [...Array(nPage + 1).keys()].slice(1);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
        );
        console.log(response.data)
        if (response.data.meals == null) {
          throw Error("Items not found");
        }
        setCategory(response.data.meals);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchItems();
  }, []);

  const handleSave = (e, item) => {
    if(login){
    if (e.target.className == "fa-regular fa-bookmark") {
      e.target.className = "fa-solid fa-bookmark";
      const fetchItems = async () => {
        const response = await axios.post(
          `https://657650fa0febac18d403d1fc.mockapi.io/login`,
          item
        );
      };
      fetchItems();
    } else {
      e.target.className = "fa-regular fa-bookmark";
    }
  }else{
    nav('/login')
  }
  };
  function changePage(page) {
    if (page == 1) {
    }
    setCurrentPage(page);
  }
  return (
    <>
      <div className="navDetails">
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
            <h6 className="pageCategory">CATEGORY</h6>
          </li>
        </ul>
      </div>
      <div className="saveList1">
        <ul>
          <li>Pages:</li>
          {number.map((n, i) => {
            return (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" onClick={() => changePage(n)}>
                  {n}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container cetegoryContainer">
        <h4 className="cetegoryHeading" style={{ textTransform: "uppercase" }}>
          {id}
        </h4>
        <div className="row categoryRow">
          {load && <p>Loading...</p>}
          {fetchError && <p>{fetchError}</p>}
          <NewItem />
          {records.map((item, index) => {
            return (
              <div className="col-2 categoryCol" key={index}>
                <div
                  className="card"
                  style={{ width: "1rem !important;", height: "18.5rem" }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/details/${item.strMeal}`}
                  >
                    <img
                      src={item.strMealThumb}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "190px", width: "196px" }}
                    />
                  </Link>
                  <i
                    className="fa-regular fa-bookmark"
                    onClick={(e) => handleSave(e, item)}
                    style={{ backgroundColor: "black", color: "white" }}
                  ></i>
                  <div className="card-body">
                    <p className="categoryArea">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-regular fa-star"></i>
                    </p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/details/${item.strMeal}`}
                    >
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
{/* <Recomends /> */}
      </div>
    </>
  );
}

export default Category;
