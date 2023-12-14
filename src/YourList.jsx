import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useParams } from "react-router-dom";
import "./Category.css";
import "./YourList.css";
import LoginPage from "./LoginPage";
import { useNavigate } from "react-router-dom";

function YourList() {
  const nav = useNavigate();
  const [item, setItem, login, setLogin] = useContext(ContextProvide);
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  const [newItem, setNewItem] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://6557461abd4bcef8b6125cf6.mockapi.io/practice"
        );
        if (response.data == null) {
          throw Error("Items not found");
        }
        setNewItem(response.data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      const updateNewItems = newItem.filter((e) => e.id !== id);
      setNewItem(updateNewItems);
      const response = await axios.delete(
        "https://6557461abd4bcef8b6125cf6.mockapi.io/practice/" + id
      );
      if (response.data == null) {
        throw Error("no items found");
      }
    } catch (err) {}
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
                      <i class="fa-solid fa-house"></i>
                    </Link>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i>
                    <i class="fa-solid fa-chevron-right"></i>
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
              {newItem.map((item) => {
                return (
                  <div className="col-2 categoryCol">
                    <div
                      class="card yourListCard"
                      style={{ width: "1rem !important;", height: "17.5rem" }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/details/${item.mealName}`}
                      >
                        <img
                          src={item.imageUrl}
                          class="card-img-top"
                          alt="..."
                          style={{ height: "190px", width: "100%" }}
                        />
                      </Link>
                      <i
                        class="fa-solid fa-trash-can"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      ></i>{" "}
                      <div class="card-body">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.mealName}`}
                        >
                          <span className="yourListReceipe">Receipes</span>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/update/${item.id}`}
                        >
                          <span className="categoryCard yourListEdit">
                            <i class="fa-regular fa-pen-to-square"></i>
                          </span>
                        </Link>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.mealName}`}
                        >
                          <p className="categoryArea">
                            <strong>{item.mealName}</strong>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default YourList;
