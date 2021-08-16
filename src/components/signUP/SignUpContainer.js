import { connect } from "react-redux";
import { registerOperation } from "../../redux/auth";
import SignUpSide from "./SignUpSide";

const mapDispatchToProps = {
  onRegister: registerOperation,
};

export default connect(null, mapDispatchToProps)(SignUpSide);
