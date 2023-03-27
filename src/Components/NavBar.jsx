import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const navBar = () => {
  return (
    <div className="navbar">
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
                &nbsp;Actividades&nbsp;
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Contacto">
            {" "}
            <button data-text="Awesome" class="button">
              <span class="hover-text" aria-hidden="true">
                &nbsp;Contacto&nbsp;
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Acerca">
            {" "}
            <button data-text="Awesome" class="button">
              <span class="hover-text" aria-hidden="true">
                &nbsp;Acerca&nbsp;
              </span>
            </button>
          </Link>
        </li>
        <li>
          <Link to="/Login">
            {" "}
            <button data-text="Awesome" class="button">
              <span class="hover-text" aria-hidden="true">
                &nbsp;Log In&nbsp;
              </span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default navBar;
