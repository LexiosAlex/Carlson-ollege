import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect, withRouter } from "react-router";

const formValid = state => {
  const { formErrors, ...rest } = state;

  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.props.history.push("/");
    } else {
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email adress";
        break;
      case "password":
        formErrors.password =
          value.length < 8 && value.length > 0
            ? "password must be at least 8 characters"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { userState } = this.props;
    if (userState.loggedIn) {
      return <Redirect push to="/" />;
    }
    const { formErrors } = this.state;

    return (
      <div className="sign-in-container">
        <div className="sing-in__form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <h2 className="sign-in__header">Sign In</h2>
            <div className="sign-in__input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "inputError" : null}
                type="email"
                placeholder="ValeraBoy@Pojily.CowBoy"
                name="email"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="sign-in__input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "inputError" : null}
                type="password"
                placeholder="password"
                name="password"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" className="btn-primary">
                Sign In
              </button>
              <Link to="/user/login/">Dont have account? create one</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn)
