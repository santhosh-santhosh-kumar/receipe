import React from "react";
import "./AddReceipe.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import LoginPage from "./LoginPage";

function AddReceipe() {
  const nav = useNavigate();
  const [item, setItem,login,setLogin] = useContext(ContextProvide);  
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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Items posted succesfully");
    axios.post("https://6557461abd4bcef8b6125cf6.mockapi.io/practice", inputData);
    nav(`/category/${inputData.category}`);
  };
  function addInputTg(){
 alert('h')
 return (
  <input
type="text"
className="ingrediants"
id="ingrediants2"
onChange={(e) =>
  setInputData({
    ...inputData,
    ingrediants2: e.target.value,
  })
}
></input>
 )
  }

  return (
    <>{true ?<div className="container containerAdd">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h4>Receipe Card</h4></div>
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
                    Ingrediants <span className="IngrediantsButton" onClick={addInputTg}>Add Ingrediants</span>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    className="ingrediants"
                    id="ingrediants1"
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        ingrediants1: e.target.value,
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
                    onChange={(e) =>
                      setInputData({ ...inputData, measure1: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure2"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure2: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure3"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure3: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure4"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure4: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure5"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure5: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure6"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure6: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure7"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure7: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure8"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure8: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure9"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure9: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure10"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure10: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure11"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure11: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure12"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure12: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure13"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure13: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure14"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure14: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure15"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure15: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure16"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure16: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure17"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure17: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure18"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure18: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure19"
                    onChange={(e) =>
                      setInputData({ ...inputData, measure19: e.target.value })
                    }
                  ></input>
                  <input
                    type="text"
                    className="ingrediants"
                    id="measure20"
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
      :<LoginPage />}
    </>
  );
}

export default AddReceipe;
