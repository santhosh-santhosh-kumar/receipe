import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useParams } from "react-router-dom";
import "./Category.css";
import "./YourList.css";
import { useRef } from "react";

function YourList() {
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  const [newItem, setNewItem] = useState([]);

  //  const newItemRef = useRef(newItem);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:3501/addItems");
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
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3501/addItems/" + id)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  };

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
                        to={`/Meal`}
                      >
                        <h6 className="pageCategory">CATEGORY</h6>
                      </Link>
                    </li>
                    <li>
                      <i class="fa-solid fa-chevron-right"></i>
                      <i class="fa-solid fa-chevron-right"></i>
                    </li>
                    <li>
                      <h6 className="pageCategory">YourList</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

      <div className="container containerYourList">
        <div className="row">
          {newItem.map((item) => {
            console.log(item);
            return (
              <div className="col-3 categoryCol">
                <div
                  class="card"
                  style={{ width: "1rem !important;", height: "27.5rem" }}
                >
                  <img
                    src={item.imageUrl}
                    class="card-img-top"
                    alt="..."
                    style={{ height: "300px", width: "100%" }}
                  />
                  <i class="fa-regular fa-bookmark"></i>
                  <div class="card-body">
                    <p className="categoryArea">
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                      <i class="fa-regular fa-star"></i>
                    </p>
                    <p className="categoryArea">
                      <strong>{item.mealName}</strong>
                    </p>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/update/${item.id}`}
                    >
                      <span className="categoryCard">Edit</span>
                    </Link>
                    <span>
                    <button
                      className="delete"
                      onClick={() => {
                        handleDelete(item.id);
                      }}
                    >
                      Delete
                    </button>
</span>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/details/${item.mealName}`}
                    >
                      <span className="categoryCard">View</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default YourList;
