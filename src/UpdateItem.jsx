import React from "react";
import "./AddReceipe.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Update.css";

function UpdateItem() {
    const nav = useNavigate();
    const [inputData, setInputData] = useState({
      category: "",
      mealName: "",
      authorName: "",
      source: "",
      imageUrl:"",
      ingrediants1: "",
      ingrediants2: "",
      ingrediants3: "",
      ingrediants4: "",
      ingrediants5: "",
      ingrediants6: "",
      ingrediants7: "",
      ingrediants8: "",
      ingrediants9: "",
      ingrediants10: "",
      ingrediants11: "",
      ingrediants12: "",
      ingrediants13: "",
      ingrediants14: "",
      ingrediants15: "",
      ingrediants16: "",
      ingrediants17: "",
      ingrediants18: "",
      ingrediants19: "",
      ingrediants20: "",
      measure1: "",
      measure2: "",
      measure3: "",
      measure4: "",
      measure5: "",
      measure6: "",
      measure7: "",
      measure8: "",
      measure9: "",
      measure10: "",
      measure11: "",
      measure12: "",
      measure13: "",
      measure14: "",
      measure15: "",
      measure16: "",
      measure17: "",
      measure18: "",
      measure19: "",
      measure20: "",
      instruction: "",
    });
    const [fetchError, setFetchError] = useState(null);
    const [load,setLoad]=useState(true)
    const {id}=useParams()

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const response = await axios.get('https://6557461abd4bcef8b6125cf6.mockapi.io/practice/'+id);
            if (response.data == null) {
              throw Error("Items not found");
            }
            setInputData(response.data);
            setFetchError(null);
          } catch (err) {
            setFetchError(err.message);
          } finally {
            setLoad(false);
          }
        };
        fetchItems();
      }, []);

      const handleSubmit=(event)=>{
        event.preventDefault();
        console.log('submit')
        axios.put('https://6557461abd4bcef8b6125cf6.mockapi.io/practice/'+id,inputData)
        nav('/yourlist')
    
      }
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
                      <h6 className="pageCategory">UPDATE</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          <div className="container containerupdate">
        <div className="row">
          <div className="col-12">
            <div className="title">
                <h4 className="ReceipeCard">Receipe Card</h4>
                </div>
            <hr></hr>
            <form onSubmit={handleSubmit}>
           
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Category
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    value={inputData.category}
                    onChange={(e) =>
                      setInputData({ ...inputData, category: e.target.value })
                    }
                  />
                  <br></br>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  MealName
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    value={inputData.mealName}
                    onChange={(e) =>
                      setInputData({ ...inputData, mealName: e.target.value })
                    }
                  />
                  <br></br>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Author Name
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    value={inputData.authorName}
                    onChange={(e) =>
                      setInputData({ ...inputData, authorName: e.target.value })
                    }
                  />
                  <br></br>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Source
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail3"
                    value={inputData.source}
                    onChange={(e) =>
                      setInputData({ ...inputData, source: e.target.value })
                    }
                  />
                  <br></br>
                </div>
              </div>

              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">
                  Image URL
                </label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    value={inputData.imageUrl}
                    onChange={(e) =>
                      setInputData({ ...inputData, imageUrl: e.target.value })
                    }
                  />
                  <br></br>
                </div>
              </div>


              <div className="combine">
                <div className="ingrediant">
                  <label htmlFor="ingrediants" className="addLabel">
                    Ingrediants
                  </label>

                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants1"
                    value={inputData.ingrediants1}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants1: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants2"
                    value={inputData.ingrediants2}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants2: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants3"
                    value={inputData.ingrediants3}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants3: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants4"
                    value={inputData.ingrediants4}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants4: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants5"
                    value={inputData.ingrediants5}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants5: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants6"
                    value={inputData.ingrediants6}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants6: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants7"
                    value={inputData.ingrediants7}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants7: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants8"
                    value={inputData.ingrediants8}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants8: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants9"
                    value={inputData.ingrediants9}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants9: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants10"
                    value={inputData.ingrediants10}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants10: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants11"
                    value={inputData.ingrediants11}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants11: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants12"
                    value={inputData.ingrediants12}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants12: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants13"
                    value={inputData.ingrediants13}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants13: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants14"
                    value={inputData.ingrediants14}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants14: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants15"
                    value={inputData.ingrediants15}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants15: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants16"
                    value={inputData.ingrediants16}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants16: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants17"
                    value={inputData.ingrediants17}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants17: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants18"
                    value={inputData.ingrediants18}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants18: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants19"
                    value={inputData.ingrediants19}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants19: e.target.value,
                      })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants20"
                    value={inputData.ingrediants20}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants20: e.target.value,
                      })
                    }
                  ></input>
                </div>
                <div className="measure">
                  <label htmlFor="measurments" className="addLabel">
                    Measurements
                  </label>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure1"
                    value={inputData.measure1}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure1: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure2"
                    value={inputData.measure2}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure2: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure3"
                    value={inputData.measure3}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure3: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure4"
                    value={inputData.measure4}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure4: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure5"
                    value={inputData.measure5}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure5: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure6"
                    value={inputData.measure6}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure6: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure7"
                    value={inputData.measure7}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure7: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure8"
                    value={inputData.measure8}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure8: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure9"
                    value={inputData.measure9}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure9: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure10"
                    value={inputData.measure10}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure10: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure11"
                    value={inputData.measure11}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure11: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure12"
                    value={inputData.measure12}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure12: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure13"
                    value={inputData.measure13}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure13: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure14"
                    value={inputData.measure14}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure14: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure15"
                    value={inputData.measure15}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure15: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure16"
                    value={inputData.measure16}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure16: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure17"
                    value={inputData.measure17}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure17: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure18"
                    value={inputData.measure18}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure18: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure19"
                    value={inputData.measure19}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure19: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure20"
                    value={inputData.measure20}
                    onChange={(e) =>
                      setInputData({ ...inputData, measure20: e.target.value })
                    }
                  ></input>
                </div>
              </div>
              <label htmlFor="Instructions" className="addTextArea">
                Instructions
              </label>
              <br></br>
              <div className="bottom">
                <textarea
                  type="text"
                  className="commends"
                  value={inputData.instruction}
                  rows={10}
                  cols={100}
                  name="Instructions"
                  onChange={(e) =>
                    setInputData({ ...inputData, instruction: e.target.value })
                  }
                ></textarea>
                <button className="addReceipeButton">Add Receipe</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default UpdateItem