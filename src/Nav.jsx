import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvide } from "./Context";
import Profile from "./Profile";


function Nav() {
  const [item, setItem,login,setLogin] = useContext(ContextProvide);
    return (
    <>
      <div className="navBar">
        <ul>
          <li className="logo">
            <Link class="navbar-brand" to={"/Meal"}>
            <p className="title">EATERY</p>
            </Link>
          </li>
          <div className="container">
            <div className="row">
              <div className="col navBarCol">
                <li>
                  <Link to={"/addReceipe"} class="nav-link home" href="#">
                  Add Receipe
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/yourList"} class="nav-link" href="#">
                    Your Receipe
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/saved"} class="nav-link" href="#">
                  Saved
                  </Link>
                  </li>
                  <li>
                    {}
                  <Link to={`/${login ? "Profile" : "login"}`} class="nav-link">
                  {login ? <i class="fa-solid fa-user"></i> :"Login"}
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Nav;
