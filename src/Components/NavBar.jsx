import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const navBar = () => {
  return (
    <div className="navBar">
      <div className="nav">
        <h1>VibaFit</h1>
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <ul>
            <li>
              <Link to="/Home">
                {" "}
                <button data-text="Awesome" class="button">
                  Inicio
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Actividades">
                {" "}
                <button data-text="Awesome" class="button">
                  <span class="hover-text" aria-hidden="true">
                    Actividades
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Contacto">
                {" "}
                <button data-text="Awesome" class="button">
                  <span class="hover-text" aria-hidden="true">
                    Contacto
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Acerca">
                {" "}
                <button data-text="Awesome" class="button">
                  <span class="hover-text" aria-hidden="true">
                    Acerca
                  </span>
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Login">
                {" "}
                <button data-text="Awesome" class="button">
                  <span class="hover-text" aria-hidden="true">
                    Log In
                  </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default navBar;
