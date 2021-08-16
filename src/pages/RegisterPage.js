import React from "react";
import { connect } from "react-redux";
import SignUpContainer from "../components/signUP/SignUpContainer";
import { registerOperation } from "../redux/auth";

const RegisterPage = () => {
  return (
    <>
      <SignUpContainer />
    </>
  );
};

const mapDispatchToProps = {
  onRegister: registerOperation,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
