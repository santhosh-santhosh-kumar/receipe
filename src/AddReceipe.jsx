import React from "react";
import "./AddReceipe.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import LoginPage from "./LoginPage";
import { useFormik } from "formik";
import SelectTag from "./SelectTag";

function AddReceipe() {
const option=[
  {value:"Beef",label:"Beef"},
  {value:"Chicken",label:"Chicken"},
  {value:"Dessert",label:"Dessert"},
  {value:"Lamb",label:"Lamb"},
  {value:"Miscellaneous",label:"Miscellaneous"},
  {value:"Pasta",label:"Pasta"},
  {value:"Pork",label:"Pork"},
  {value:"Seafood",label:"Seafood"},
  {value:"Side",label:"Side"},
  {value:"Starter",label:"Starter"},
  {value:"Vegan",label:"Vegan"},
  {value:"Vegetarian",label:"Vegetarian"},
  {value:"Breakfast",label:"Breakfast"},
  {value:"Goat",label:"Goat"}
]

  const nav = useNavigate();
  const [measurement, setMeasurement] = useState([]);
  const [value, setValue] = useState([]);
  const [item, setItem, login, setLogin] = useContext(ContextProvide);
  const [notification, setNotification] = useState(false);
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
  const formik = useFormik({
    initialValues: {
      Category: "sdsf",
      MealName: "",
      author: "",
      Source: "",
      image: "",
      addIngrediants: "",
      addMeasure: "",
      Instructions: "",
    },
    validate: (values) => {
      let error={};

    },
    onSubmit: async (values) => {
      try{
          await axios.post("https://6557461abd4bcef8b6125cf6.mockapi.io/practice",values)
          alert("post")
          nav('/Meal')
          setNotification(true);
      }catch(error){
          console.log(error)
      }
    console.log(values);
  },

  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.post(
  //     "https://6557461abd4bcef8b6125cf6.mockapi.io/practice",
  //     inputData
  //   );
  //   setNotification(true);
  // };
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
  const handleNavigate = () => {
    nav(`/${inputData.category}`);
  };
  return (
    <>
      {true ? (
        <div className="addReceipe" id="homePage">
          <div className="container containerAdd">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <h4>Receipe Card</h4>
                </div>
                <hr></hr>
                <form onSubmit={formik.handleSubmit}>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">
                      Category
                    </label>
                    <div class="col-sm-8">
                      <SelectTag 
                      option={option}
                      value={formik.values.Category}
                      onchange={value=>formik.setFieldValue('Category',value.value)}
                      />
                      {/* <input
                        type="text"
                        class="form-control"
                        id="inputEmail3"
                        name="Category"
                        value={formik.values.Category}
                        onChange={formik.handleChange}
                        // onChange={(e) =>
                        //   setInputData({ ...inputData, category: e.target.value })
                        // }
                      /> */}
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
                        name="MealName"
                        value={formik.values.MealName}
                        onChange={formik.handleChange}
                        // onChange={(e) =>
                        //   setInputData({ ...inputData, mealName: e.target.value })
                        // }
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
                        name="author"
                        id="inputEmail3"
                        value={formik.values.author}
                        // onChange={(e) =>
                        //   setInputData({
                        //     ...inputData,
                        //     authorName: e.target.value,
                        //   })
                        // }
                        onChange={formik.handleChange}
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
                        name="Source"
                        value={formik.values.Source}
                        // onChange={(e) =>
                        //   setInputData({ ...inputData, source: e.target.value })
                        // }
                        onChange={formik.handleChange}
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
                        name="image"
                        id="inputEmail4"
                        value={formik.values.image}
                        // onChange={(e) =>
                        //   setInputData({
                        //     ...inputData,
                        //     imageUrl: e.target.value,
                        //   })
                        // }
                        onChange={formik.handleChange}
                      />
                      <br></br>
                    </div>
                  </div>

                  <div className="combine">
                    <div className="ingrediant">
                      <label htmlFor="ingrediants" className="addLabel">
                        Ingrediants{" "}
                        <span
                          className="IngrediantsButton"
                          onClick={addInputTg}
                        >
                          Add Ingrediants
                        </span>
                      </label>

                      <br></br>
                      {value.map((e, i) => {
                        return (
                          <div>
                            <input
                              type="text"
                              className="ingrediants"
                              id="ingrediants"
                              value={formik.values.addIngrediants}
                              name="addIngrediants"
                              onChange={formik.handleChange}
                              // onChange={(e) => handleChangeIngredient(e, i)}
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
                              name="addMeasure"
                              value={formik.values.addMeasure}
                              onChange={formik.handleChange}
                              // onChange={(e) => handleChangeMeasure(e, i)}
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
                      className="commends"
                      rows={10}
                      cols={100}
                      name="Instructions"
                      value={formik.values.Instructions}
                      onChange={formik.handleChange}
                      // onChange={(e) =>
                      //   setInputData({
                      //     ...inputData,
                      //     instruction: e.target.value,
                      //   })
                      // }
                    ></textarea>
                    <button className="addReceipeButton">Add</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className={`notification2 ${notification ? "notification3" : ""}`}
          >
            <p className="sucess">successfully</p>
            <p className="itemNoti">{`Item Added in ${inputData.category} category`}</p>
            <p>
              <i class="fa-solid fa-check"></i>
            </p>
            <span className="close" onClick={handleNavigate}>
              See Add item
            </span>
          </div>
        </div>
      ) : (
        <LoginPage />
      )}
    </>
  );
}

export default AddReceipe;
