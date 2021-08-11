import React from "react";
import { NavLink } from "react-router-dom";

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

const Navigation = () => {
  return (
    <div>
      <NavLink
        to="/contacts"
        style={styles.link}
        activeStyle={styles.activeLink}
        // className="NavLink"
        // activeClassName="NavLink--active"
      >
        {/* <svg className="NavLink__icon">
          <use href={sprite + "#icon-video-camera"}></use>
        </svg> */}
        Contacts
      </NavLink>
    </div>
  );
};

export default Navigation;
