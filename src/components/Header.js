import React from "react";
import { Link } from "react-router-dom";

import { routes } from "../config/Router";
import moviesImage from "../assets/movies-banner.jpg";
import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <Link to="/"> React Movies </Link>
        </h1>
        <nav>
          <div className={classes["nav-item"]}>
            <div className={classes["nav-links"]}>
              {routes.map(route => {
                if (route.isHeaderElement) {
                  return (
                    <li key={route.title}>
                      <Link to={route.path} className={classes["link"]}>
                        {route.title}
                      </Link>
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </nav>
      </header>
      <div className={classes["main-image"]}>
        <img src={moviesImage} alt="A collection of great movies!" />
      </div>
    </>
  );
};

export default Header;
