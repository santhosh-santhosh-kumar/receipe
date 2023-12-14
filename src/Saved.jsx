import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import LoginPage from "./LoginPage";
import "./Saved.css";
import { useNavigate } from "react-router-dom";


function Saved() {
  const [item, setItem, login, setLogin, user, setUser] =useContext(ContextProvide);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const records = details.slice(firstPage, lastPage);
  const nPage = Math.ceil(details.length / perPage);
  const number = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `https://657650fa0febac18d403d1fc.mockapi.io/login`
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
  function changePage(page) {
    if (page == 1) {
    }
    setCurrentPage(page);
  }
  const handleDelete = async (id) => {
      try {
        const updateNewItems=details.filter((e)=>e.id!==id)
        setDetails(updateNewItems)
        const response = await axios.delete(
          "https://657650fa0febac18d403d1fc.mockapi.io/login/" + id
        )
        if (response.data == null) {
          throw Error("no items found");
        }
      } catch (err) {}
  
  };


  return (
    <>
      {true ? (
        <>
          <div className="navDetails">
            <ul>
              <li>
                <Link style={{ textDecoration: "none" }} to={"/Meal"}>
                  <i class="fa-solid fa-house"></i>
                </Link>
              </li>

              <li>
                <i class="fa-solid fa-chevron-right"></i>
                <i class="fa-solid fa-chevron-right"></i>
              </li>

              <li>
                <h6 className="pageCategory">SAVED</h6>
              </li>
              <div className="saveList">
                <li className="savedPage">Pages:</li>
                {number.map((n, i) => {
                  return (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active1" : ""
                      } savePage`}
                      key={i}
                    >
                      <a href="#" onClick={() => changePage(n)}>
                        {n}
                      </a>
                    </li>
                  );
                })}
              </div>
            </ul>
          </div>

          <div className="container cetegoryContainer">
            <h4
              className="cetegoryHeading"
              style={{ textTransform: "uppercase" }}
            >
              {id}
            </h4>
            <div className="row categoryRow">
              {load && <p>Loading...</p>}
              {fetchError && <p>{fetchError}</p>}
              {records.map((item) => {
                return (
                  <div className="col-2 categoryCol">
                    <div
                      class="card savedCol"
                      style={{ width: "1rem !important;", height: "18.5rem" }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/details/${item.strMeal}`}
                      >
                        <img
                          src={item.strMealThumb}
                          class="card-img-top"
                          alt="..."
                          style={{ height: "190px", width: "100%" }}
                        />
                      </Link>
                      <i
                        class="fa-solid fa-trash"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      ></i>
                      <div class="card-body">
                        <p className="categoryArea">
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </p>
                        <Link
                        style={{ textDecoration: "none" }}
                        to={`/details/${item.strMeal}`}
                      >
    
                        <p className="categoryArea">
                          <strong>Tasting the world</strong>
                        </p>
                        <p className="categoryCard cardSaved">
                          {item.strMeal.length > 15
                            ? item.strMeal.slice(0, 10)
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
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default Saved;
