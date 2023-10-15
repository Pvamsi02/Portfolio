import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Navbars() {
  return (
    <div>
      <nav className=" p-2 navbar  navbar-expand-lg navbar-dark navbar-color">
        <div class="container">
          <Link className="navbar-brand" to="/">
            Pavana Vamsi
          </Link>

          {/* <button
            class="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}
          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <div>
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className=" nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className=" nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className=" nav-link active" to="/project">
                  Project
                </Link>
              </li>
              <li class="nav-item">
                <Link className=" nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbars;
