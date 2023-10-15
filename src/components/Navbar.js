import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    <div>
      <nav className=" p-2 navbar navbar-expand-lg navbar-dark  d-flex flex-row-reverse navbar-color">
        <Link className="navbar-brand" to="/">
          Pavana Vamsi
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link active" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link active" to="/project">
                Project
              </Link>
            </li>
            <li>
              <Link className="nav-item nav-link active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
