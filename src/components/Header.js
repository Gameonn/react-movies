import React from "react";
import { NavLink } from "react-router-dom";

import { routes } from "../config/Router";
import moviesImage from "../assets/movies-banner.jpg";
import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          <NavLink to="/"> React Movies </NavLink>
        </h1>
        <nav>
          <div className={classes["nav-item"]}>
            <div className={classes["nav-links"]}>
              {routes.map((route) => {
                if (route.isHeaderElement) {
                  return (
                    <li key={route.title}>
                      <NavLink
                        to={route.path}
                        className={classes["link"]}
                        style={({ isActive }) => ({
                          color: isActive ? "#fff" : "#ccc",
                        })}
                      >
                        {route.title}
                      </NavLink>
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
