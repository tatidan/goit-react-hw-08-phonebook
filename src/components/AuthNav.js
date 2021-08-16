import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2014ce",
  },
  activeLink: {
    color: "#129ddd",
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
      >
        Register
      </NavLink>

      <NavLink to="/login" style={styles.link} activeStyle={styles.activeLink}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
