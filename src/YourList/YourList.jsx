import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import { useParams } from "react-router-dom";
import "../HomePage/Category.css";
import "./YourList.css";
import LoginPage from "../Login/LoginPage";
import Recomends from "../Recomends/Recomends";

function YourList() {
  const [item, setItem, login, setLogin] = useContext(ContextProvide);
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  const [newItem, setNewItem] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://6557461abd4bcef8b6125cf6.mockapi.io/practice"
      );
      if (response.data == null) {
        throw Error("No Items");
      }
      setNewItem(response.data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setLoad(false);
    }

  };

  useEffect(() => {
    fetchItems();
  }, [newItem]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        "https://6557461abd4bcef8b6125cf6.mockapi.io/practice/" + id
      );
      if (response.data == null) {
        throw Error("no items found");
      }
      fetchItems();
    } catch (err) {
      
    }
  };

  return (
    <>
      {login ? (
        <div>
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
                    <h6 className="pageCategory">YOURLIST</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container containerYourList">
            <div className="row">
            {newItem.length ===0 && <p>No Items</p>}
              {newItem.map((item) => {
                return (
                  <div className="col-2 categoryCol">
                    <div
                      className="card yourListCard"
                      style={{ width: "1rem !important;", height: "17.5rem" }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/details/${item.MealName}`}
                      >
                        <img
                          src={item.image ? item.image : "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"}
                          className="card-img-top"
                          alt="receipe "
                          style={{ height: "190px", width: "100%" }}
                        />
                      </Link>
                      <i
                        className="fa-solid fa-trash-can"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      ></i>{" "}
                      <div className="card-body">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.MealName}`}
                        >
                          <span className="yourListReceipe">Receipes</span>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/update/${item.id}`}
                        >
                          <span className="categoryCard yourListEdit">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </span>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.MealName}`}
                        >
                          <p className="categoryArea">
                            <strong>{item.MealName}</strong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Recomends />

          </div>

        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default YourList;
