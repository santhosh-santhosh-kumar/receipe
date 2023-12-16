import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../HomePage/Category.css";
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
                    if(item.Category.toLowerCase()==id.toLowerCase()){
                return (
                  <div className="col-2 categoryCol newItemCol">
                    <div
                      className="card"
                      style={{ width: "1rem !important;", height: "18.5rem"}}
                    >
                       <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.mealName}`}
                        >
                      <img
                        src={item.image ? item.image : "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"}
                        className="card-img-top"
                        alt="..."
                        style={{height:"190px",width: "100%"}}/>
                       </Link>
                       <i className="fa-solid fa-user new-user"></i>
                      <div className="card-body">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/details/${item.MealName}`}
                        >
                          <p className="categoryArea">
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </p>
                            <p className="categoryCard">
                            {item.MealName.length > 19
                              ? item.MealName.slice(0, 19)
                              : item.MealName}
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
