import React, { Component } from "react";
import { connect } from "react-redux";
import { loginOperation } from "../redux/auth";

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

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h2>Login page</h2>
        <form
          style={styles.form}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
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
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: loginOperation,
};

export default connect(null, mapDispatchToProps)(LoginPage);
