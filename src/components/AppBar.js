import React from "react";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import { getIsAuthenticated } from "../redux/auth";
import { connect } from "react-redux";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

const AppBar = ({ isAuthenticated }) => {
  return (
    <header style={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
