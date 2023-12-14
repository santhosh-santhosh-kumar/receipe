import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useParams } from "react-router-dom";
import "./Category.css";
import "./NewItem.css";

function NewItem() {
  const { id } = useParams();
  const [fetchError, setFetchError] = useState(null);
  const [load,setLoad]=useState(true)
  const [newItem, setNewItem] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://6557461abd4bcef8b6125cf6.mockapi.io/practice`);
        if (response.data==null){
            throw Error("Items not found")
        }
        setNewItem(response.data);
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
            {
                newItem.map((item) => {
                    if(item.category.toLowerCase()==id.toLowerCase()){
                return (
                  <div className="col-2 categoryCol newItemCol">
                    <div
                      class="card"
                      style={{ width: "1rem !important;", height: "18.5rem"}}
                    >
                       <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.mealName}`}
                        >
                      <img
                        src={item.imageUrl}
                        class="card-img-top"
                        alt="..."
                        style={{height:"190px",width: "100%"}}/>
                       </Link>
                       <i class="fa-solid fa-user new-user"></i>
                      <div class="card-body">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.mealName}`}
                        >
                          <p className="categoryArea">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-regular fa-star"></i>
                        </p>
                            <p className="categoryCard">
                            {item.mealName.length > 19
                              ? item.mealName.slice(0, 19)
                              : item.mealName}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
}})
            }
    </>
  );
}

export default NewItem;
