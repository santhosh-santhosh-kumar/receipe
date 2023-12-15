import React from "react";
import "./AddReceipe.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import LoginPage from "../Login/LoginPage";
import { useFormik } from "formik";

function AddReceipe() {
  const nav = useNavigate();
  const [measurement, setMeasurement] = useState([]);
  const [value, setValue] = useState([]);
  const [item, setItem, login, setLogin] = useContext(ContextProvide);
  const [notification, setNotification] = useState(false);
  const formik = useFormik({
    initialValues: {
      Category: "",
      MealName: "",
      author: "",
      Source: "",
      image: "",
      addIngrediants: {},
      addMeasure: "",
      Instructions: "",
    },
    validate: (values) => {
      let error = {};
      // if (values.Category == "") {
      //   error.Category = "Select category";
      // }
      // if (values.MealName == "") {
      //   error.MealName = "Required";
      // }
      // if (values.author == "") {
      //   error.author = "Required";
      // }
      // if (values.image == "") {
      //   error.image = "Required";
      // }
      // if (values.Source == "") {
      //   error.Source = "Required";
      // }
      // if (values.Instructions == "") {
      //   error.Instructions = "Required";
      // }
      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://6557461abd4bcef8b6125cf6.mockapi.io/practice",
          values
        );
        setNotification(true);
      } catch (error) {
        console.log(error);
      }
    },
  });
  function addInputTg() {
    let value1 = [...value, []];
    setValue(value1);
  }
  function addMeasureTg() {
    let value2 = [...measurement, []];
    setMeasurement(value2);
  }
  // function handleChangeIngredient(element, i) {
  //   const data = [...value];
  //   data[i] = element.target.value;
  //   setValue(data);
  //   setInputData({ ...inputData, ingredient: value });
  // }
  // function handleChangeMeasure(element, i) {
  //   const data = [...measurement];
  //   data[i] = element.target.value;
  //   setMeasurement(data);
  //   setInputData({ ...inputData, measure: measurement });
  // }
  const handleNavigate = () => {
    nav(`/${formik.values.Category}`);
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
                  <div className="form-group row">
                    <label htmlFor="Category" className="col-sm-2 col-form-label">
                      Category
                    </label>
                    <div className="col-sm-8">
                      <select
                        id="Cetegory"
                        name="Category"
                        value={formik.values.Category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">...Select Category...</option>
                        <option value="Beef">Beef</option>
                        <option value="Chicken">Chicken</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Lamb">Lamb</option>
                        <option value="Miscellanee">Miscellanee</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Pork">Pork</option>
                        <option value="Seafood">Seafood</option>
                        <option value="Side">Side</option>
                        <option value="Starter">Starter</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Goat">Goat</option>
                      </select>
                      <span style={{ color: "red" }}>
                        {formik.errors.Category}
                      </span>

                      <br></br>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="MealName" className="col-sm-2 col-form-label">
                      MealName
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="MealName"
                        name="MealName"
                        value={formik.values.MealName}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {formik.errors.MealName}
                      </span>
                      <br></br>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="author" className="col-sm-2 col-form-label">
                      Author Name
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        name="author"
                        id="author"
                        value={formik.values.author}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {formik.errors.MealName}
                      </span>
                      <br></br>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="Source" className="col-sm-2 col-form-label">
                      Source
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        id="Source"
                        name="Source"
                        value={formik.values.Source}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {formik.errors.Source}
                      </span>
                      <br></br>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="image" className="col-sm-2 col-form-label">
                      Image URL
                    </label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        name="image"
                        id="image"
                        value={formik.values.image}
                        onChange={formik.handleChange}
                      />
                      <span style={{ color: "red" }}>
                        {formik.errors.author}
                      </span>
                      <br></br>
                    </div>
                  </div>

                  <div className="combine">
                    <div className="ingrediant">
                      <label htmlFor="addIngrediants" className="addLabel">
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
                        console.log(e)
                        console.log(formik.values.addIngrediants)
                        return (
                          <div>
                            <input
                              type="text"
                              className="ingrediants"
                              id="addIngrediants"
                              // value={formik.values.addIngrediants}
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
                    ></textarea>
                    <span style={{ color: "red" }}>
                      {formik.errors.Instructions}
                    </span>
                    <button type="submit" className="addReceipeButton">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div
            className={`notification2 ${notification ? "notification3" : ""}`}
          >
            <p className="sucess">successfully</p>
            <p className="itemNoti">{`Item Added in ${formik.values.Category} category`}</p>
            <p>
              <i className="fa-solid fa-check"></i>
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
