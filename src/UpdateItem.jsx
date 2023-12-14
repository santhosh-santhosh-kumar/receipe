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
  const [measurement, setMeasurement] = useState([]);
  const [inputData, setInputData] = useState({
    category: "",
    mealName: "",
    authorName: "",
    source: "",
    imageUrl: "",
    ingredient: "",
    measure: "",
    instruction: "",
  });
  const [fetchError, setFetchError] = useState(null);
  const [load, setLoad] = useState(true);
  const [value, setValue] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "https://6557461abd4bcef8b6125cf6.mockapi.io/practice/" + id
        );
        if (response.data == null) {
          throw Error("Items not found");
        }
        setInputData(response.data);
        setValue([...value,...response.data.ingredient])
        setMeasurement([...measurement,...response.data.measure])
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchItems();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      "https://6557461abd4bcef8b6125cf6.mockapi.io/practice/" + id,
      inputData
    );
    nav("/yourlist");
  };

  function addInputTg() {
    let value1 = [...value, []];
    setValue(value1);
  }
  function addMeasureTg() {
    let value2 = [...measurement, []];
    setMeasurement(value2);
  }

  function handleChangeIngredient(element, i) {
    const data = [...value];
    data[i] = element.target.value;
    setValue(data);
    setInputData({ ...inputData, ingredient: value });
  }
  function handleChangeMeasure(element, i) {
    const data = [...measurement];
    data[i] = element.target.value;
    setMeasurement(data);
    setInputData({ ...inputData, measure: measurement });
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
                <Link style={{ textDecoration: "none" }} to={`/Meal`}>
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
            <form onSubmit={handleSubmit} className="update">
              <div class="form-group row ">
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
                    <span className="IngrediantsButton" onClick={addInputTg}>
                        Add Ingrediants
                      </span>
                    
                  </label>


       
{value.map((e, i) => {
                      return (
                        <div>
                          <input
                            type="text"
                            className="ingrediants"
                            value={e}
                            id="ingrediants"
                            onChange={(e) => handleChangeIngredient(e, i)}
                          ></input>
                        </div>
                      );
                    })}

                </div>
                <div className="measure">
                  <label htmlFor="measurments" className="addLabel">
                    Measurements
                    <span
                        className="IngrediantsButton1"
                        onClick={addMeasureTg}
                      >
                        Add Measure
                      </span>
                 
                  </label>
                 
                 
                 
                  {measurement.map((e, i) => {
                      return (
                        <div>
                          <input
                            type="text"
                            className="ingrediants"
                            id="measure1"
                            value={e}
                            onChange={(e) => handleChangeMeasure(e, i)}
                          ></input>
                        </div>
                      );
                    })}

                 
                 
                 
                 
                 
                </div>
              </div>
              <label htmlFor="Instructions" className="addTextArea">
                Instructions
              </label>
              <br></br>
              <div className="bottom">
                <textarea
                  type="text"
                  className="commends textCommends"
                  value={inputData.instruction}
                  rows={10}
                  cols={100}
                  name="Instructions"
                  onChange={(e) =>
                    setInputData({ ...inputData, instruction: e.target.value })
                  }
                ></textarea>
                <button className="addReceipeButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateItem;
