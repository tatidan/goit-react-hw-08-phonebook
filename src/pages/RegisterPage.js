import React, { Component } from "react";
import { connect } from "react-redux";
import { registerOperation } from "../redux/auth";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

class RegisterPage extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password, name } = this.state;

    return (
      <div>
        <h2>Registration page</h2>
        <form
          style={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label style={styles.label}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="email@email.example"
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            <input
              type="text"
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" onSubmit={this.handleSubmit}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registerOperation,
};

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (data) => dispatch(registerOperation(data)),
// });

export default connect(null, mapDispatchToProps)(RegisterPage);
