import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
  AiOutlineSafetyCertificate,
  AiOutlineProfile,
} from "react-icons/ai";
import profile from "./PV-icon.png";

function Navbars() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div class="container">
          <Link className="navbar-brand text-dark" to="/">
            <img src={profile} alt="" class="pvicon" />{" "}
            <span class="vamsi">Pavana Vamsi</span>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item  ">
                <Link className=" nav-link active text-dark" to="/">
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Link>
              </li>
              <li class="nav-item ">
                <Link className=" nav-link active text-dark" to="/about">
                  <AiOutlineProfile style={{ marginBottom: "2px" }} /> About
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  className=" nav-link active text-dark"
                  to="/certifications"
                >
                  <AiOutlineSafetyCertificate style={{ marginBottom: "2px" }} />{" "}
                  Certifications
                </Link>
              </li>
              <li class="nav-item ">
                <Link className=" nav-link active text-dark" to="/project">
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Project
                </Link>
              </li>
              <li class="nav-item ">
                <Link className=" nav-link active text-dark" to="/contact">
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
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
