import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../redux/auth";

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
  icon: {
    width: "20px",
    height: "20px",
    fill: "#2014ce",
    marginRight: "5px",
  },
};

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
