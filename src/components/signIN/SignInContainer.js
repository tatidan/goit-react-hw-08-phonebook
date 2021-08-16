// import React, { Component } from "react";
import { connect } from "react-redux";
import { loginOperation } from "../../redux/auth";
import SignInSide from "./SignInSide";

const mapDispatchToProps = {
  onLogin: loginOperation,
};

export default connect(null, mapDispatchToProps)(SignInSide);
