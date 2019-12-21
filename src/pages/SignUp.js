import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect ,withRouter } from "react-router";

const formValid = state => {
  const {
    formErrors,
    ...rest
    } = state;

  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false)
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false)
  });

  return valid;
};

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email:null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      this.props.history.push("/user/login");
    } else {

    }
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "firstName":
      formErrors.firstName =
        value.length < 3 &&  value.length > 0 ?
          "minimum 3 characters required" : "";
      break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 &&  value.length > 0 ?
            "minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email =
          emailRegex.test(value) &&  value.length > 0 ?
            "" : "invalid email adress";
        break;
      case "password":
        formErrors.password =
          value.length < 8 &&  value.length > 0 ?
            "password must be at least 8 characters" : "";
        break;
      default:
        break;
    }

  this.setState({formErrors, [name]: value})

  };

  render() {
    const {userState} = this.props;
    if (userState.loggedIn) {
      return <Redirect push to="/user/account" />;
    }
    const {formErrors} = this.state;

    return (
      <div className="sign-in-container">
        <div className="sing-in__form-wrapper">
          <h2 className="sign-in__header">Create account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="sign-in__input-wrapper">
              <label htmlFor="firstName">First name</label>
              <input
                className={formErrors.firstName.length > 0 ? "inputError" : null}
                type="text"
                placeholder="First name"
                name="firstName"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="sign-in__input-wrapper">
              <label htmlFor="lastName">First name</label>
              <input
                className={formErrors.lastName.length > 0 ? "inputError" : null}
                type="text"
                placeholder="Last Name"
                name="lastName"
                formNoValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="sign-in__input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "inputError" : null}
                type="email"
                placeholder="tankist@milo.sho"
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
                Create Account
              </button>
              <Link to="/user/login/">Already have an Account? try to sign In</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
