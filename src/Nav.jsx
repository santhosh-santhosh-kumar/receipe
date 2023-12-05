import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navBar">
        <ul>
          <li className="logo">
            {" "}
            <Link class="navbar-brand" to={"/Meal"}>
            <h2><strong><i class="fa-solid fa-burger"></i>Tastyyyy</strong></h2>
            </Link>
          </li>
          <div className="container">
            <div className="row">
              <div className="col navBarCol">
                <li>
                  <Link to={"/addReceipe"} class="nav-link home" href="#">
                  <strong>Add Receipe</strong>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/yourList"} class="nav-link" href="#">
                    <strong>Your Receipe</strong>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to={"/recent"} class="nav-link" href="#">
                  <strong>Saved</strong>
                  </Link>
                  </li>
                  <li>
                  <Link to={"/login"} class="nav-link" href="#">
                  <strong>Login/Register</strong>
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
