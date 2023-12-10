import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import { useParams } from "react-router-dom";
import "./Category.css";

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
                  <div className="col-3 categoryCol">
                    <div
                      class="card"
                      style={{ width: "1rem !important;", height: "27.5rem"}}
                    >
                      <img
                        src={item.imageUrl}
                        class="card-img-top"
                        alt="..."
                        style={{height:"300px",width: "100%"}}/>
                        <i class="fa-regular fa-bookmark"></i>
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
                            <p className="categoryArea"><strong>Tasting the world, one dish at a time</strong></p>
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
