import React from "react";
import AuthNav from "../UserMenu/AuthNav";
import Navigation from "../UserMenu/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

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
    <header
      style={styles.header}
      // className="header"
    >
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
      {/* <LanguageSwitcher /> */}
    </header>
  );
};

export default AppBar;
