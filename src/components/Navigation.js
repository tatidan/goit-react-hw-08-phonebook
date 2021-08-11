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
    color: "#885e88",
  },
  activeLink: {
    color: "#ee82ee",
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
          // className="NavLink"
          // activeClassName="NavLink--active"
        >
          {/* <svg className="NavLink__icon">
          <use href={sprite + "#icon-video-camera"}></use>
        </svg> */}
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
