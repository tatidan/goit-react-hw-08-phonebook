import React from "react";
import { NavLink } from "react-router-dom";
// import sprite from "../../icons/sprite.svg";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#885e88",
  },
  activeLink: {
    color: "#ee82ee",
  },
};

const AuthNav = () => {
  return (
    <div>
      <NavLink
        exact
        to="/register"
        style={styles.link}
        activeStyle={styles.activeLink}
        // className="NavLink"
        // activeClassName="NavLink--active"
      >
        {/* <svg className="NavLink__icon">
            <use href={sprite + "#icon-home"}></use>
          </svg> */}
        Register
      </NavLink>

      <NavLink
        to="/login"
        style={styles.link}
        activeStyle={styles.activeLink}
        // className="NavLink"
        // activeClassName="NavLink--active"
      >
        {/* <svg className="NavLink__icon">
            <use href={sprite + "#icon-video-camera"}></use>
          </svg> */}
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
