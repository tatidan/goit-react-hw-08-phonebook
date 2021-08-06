import React from "react";
import { NavLink } from "react-router-dom";
// import sprite from "../../icons/sprite.svg";

const NavList = () => {
  return (
    <ul className="NavList">
      <li className="NavListItem">
        <NavLink
          exact
          to="/register"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          {/* <svg className="NavLink__icon">
            <use href={sprite + "#icon-home"}></use>
          </svg> */}
          Register
        </NavLink>
      </li>

      <li className="NavListItem">
        <NavLink
          to="/login"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          {/* <svg className="NavLink__icon">
            <use href={sprite + "#icon-video-camera"}></use>
          </svg> */}
          Login
        </NavLink>
      </li>

      <li className="NavListItem">
        <NavLink
          to="/contacts"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          {/* <svg className="NavLink__icon">
            <use href={sprite + "#icon-video-camera"}></use>
          </svg> */}
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default NavList;
