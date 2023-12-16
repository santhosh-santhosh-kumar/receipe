import React from "react";
import "./AddReceipe.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextProvide } from "../Context";
import LoginPage from "../Login/LoginPage";
import { useFormik, FieldArray, Field, Formik, Form } from "formik";

function AddReceipe() {
  const nav = useNavigate();
  const [item, setItem, login, setLogin] = useContext(ContextProvide);
  const [notification, setNotification] = useState(false);
  function handleNavigate ()  {
    nav(`/Meal`);

}

  return (
    <>
      {login ? (
        <div className="addReceipe" id="homePage">
          <div className="container containerAdd">
            <div className="row">
              <div className="col-12">
                <div className="title">
                  <h4>Receipe Card</h4>
                </div>
                <hr></hr>
                <Formik
                  initialValues={{
                    Category: "",
                    MealName: "",
                    author: "",
                    Source: "",
                    image: "",
                    addIngrediants: [],
                    addMeasure: [],
                    Instructions: "",
                  }}
                  validate={(values) => {
                    let error = {};
                    if (values.Category == "") {
                      error.Category = "*Select category*";
                    }
                    if (values.MealName == "") {
                      error.MealName = "*Required";
                    }else if (values.MealName.length < 4 || values.MealName.length > 25) {
                      error.firstName =
                        "*Meal name should be above 3 chars and below 25 chars*";
                    } else if (!/^[A-Za-z ]*$/.test(values.MealName)) {
                      error.MealName = "*Meal name should be in chars*";
                    }
                    if (values.author == "") {
                      error.author = "*Required";
                    }else if (values.author.length < 4 || values.author.length > 25) {
                      error.firstName =
                        "*Author name should be above 3 chars and below 25 chars*";
                    } else if (!/^[A-Za-z ]*$/.test(values.author)) {
                      error.author = "*Author name should be in chars*";
                    }
                    if (values.Source == "") {
                      error.Source = "*Required";
                    }
                    if (values.Instructions == "") {
                      error.Instructions = "Required";
                    }
                    console.log(error)
                    return error;
                  }
                }

                  onSubmit={async (values) => {
                    try {
                      await axios.post(
                        "https://6557461abd4bcef8b6125cf6.mockapi.io/practice",
                        values
                      );
                      setNotification(true);
                    } catch (error) {
                      alert("Something went wrong please try again")
                    }
                  }}
                >

                  {({
                    errors,
                    validateField,
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => {
                    return (
                      <Form onSubmit={handleSubmit}>
                        <div className="form-group row">
                          <label
                            htmlFor="Category"
                            className="col-sm-2 col-form-label"
                          >
                            Category
                          </label>
                          <div className="col-sm-8">
                            <select
                              id="Cetegory"
                              name="Category"
                              value={values.Category}
                              onChange={handleChange}
                              onBlur={handleBlur}
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
                              {errors.Category}
                            </span>

                            <br></br>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="MealName"
                            className="col-sm-2 col-form-label"
                          >
                            MealName
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="MealName"
                              name="MealName"
                              value={values.MealName}
                              onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>
                              {errors.MealName}
                            </span>
                            <br></br>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="author"
                            className="col-sm-2 col-form-label"
                          >
                            Author Name
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              name="author"
                              id="author"
                              value={values.author}
                              onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>
                              {errors.MealName}
                            </span>
                            <br></br>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="Source"
                            className="col-sm-2 col-form-label"
                          >
                            Source
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              id="Source"
                              name="Source"
                              value={values.Source}
                              onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>
                              {errors.Source}
                            </span>
                            <br></br>
                          </div>
                        </div>

                        <div className="form-group row">
                          <label
                            htmlFor="image"
                            className="col-sm-2 col-form-label"
                          >
                            Image URL
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              name="image"
                              id="image"
                              value={values.image}
                              onChange={handleChange}
                            />
                            <span style={{ color: "red" }}>
                              {errors.author}
                            </span>
                            <br></br>
                          </div>
                        </div>

                        <div className="combine">
                          <div className="ingrediant">
                            <label
                              htmlFor="addIngrediants"
                              className="addLabel"
                            >
                              Ingrediants
                            </label>
                            <FieldArray name="addIngrediants">
                              {({ push, remove }) => {
                                return (
                                  <div>
                                    {values.addIngrediants.map((feild, i) => {
                                      return (
                                        <>
                                          <Field
                                            type="text"
                                            className="ingrediants"
                                            id="addIngrediants"
                                            value={feild}
                                            name={`addIngrediants.${i}`}
                                            onChange={handleChange}
                                          ></Field>
                                          <span onClick={() => remove(i)}>
                                            <i class="fa-solid fa-xmark"></i>{" "}
                                          </span>
                                        </>
                                      );
                                    })}
                                    <span onClick={() => push("")}>
                                      <i class="fa-solid fa-plus"></i>
                                    </span>
                                  </div>
                                );
                              }}
                            </FieldArray>

                            <br></br>
                          </div>
                          <div className="measure">
                            <label htmlFor="measurments" className="addLabel">
                              Measurements
                            </label>

                            <FieldArray name="addMeasure">
                              {({ push, remove }) => {
                                return (
                                  <div>
                                    {values.addMeasure.map((feild, i) => {
                                      return (
                                        <>
                                          <Field
                                            type="text"
                                            className="ingrediants"
                                            id="addIngrediants"
                                            value={feild}
                                            name={`addMeasure.${i}`}
                                            onChange={handleChange}
                                          ></Field>
                                          <span onClick={() => remove(i)}>
                                          <i class="fa-solid fa-xmark"></i>    </span>
                                        </>
                                      );
                                    })}
                                    <span onClick={() => push("")}>
                                    <i class="fa-solid fa-plus"></i>                                      
                                    </span>
                                  </div>
                                );
                              }}
                            </FieldArray>

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
                            value={values.Instructions}
                            onChange={handleChange}
                          ></textarea>
                          <span style={{ color: "red" }}>
                            {errors.Instructions}
                          </span>
                          <button type="submit" className="addReceipeButton">
                            Add
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>

          <div
          className={`notification2 ${notification ? "notification3" : ""}`}
          >
            <p className="sucess">successfully</p>
            <p className="itemNoti">{`Item Added in  category`}</p>
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
