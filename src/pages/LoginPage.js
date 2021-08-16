import React from "react";
import { connect } from "react-redux";
import SignInContainer from "../components/signIN/SignInContainer";
import { loginOperation } from "../redux/auth";

const LoginPage = () => {
  return (
    <>
      <SignInContainer />
    </>
  );
};

const mapDispatchToProps = {
  onLogin: loginOperation,
};

export default connect(null, mapDispatchToProps)(LoginPage);
