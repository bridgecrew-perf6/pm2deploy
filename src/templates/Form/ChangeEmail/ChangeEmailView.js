/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import ChangeEmailForm from "./ChangeEmailForm";
import messageChangeEmail from "./messageChangeEmail";

const { loginNameEmpty, emailEmpty, emailWrongFormat, passwordEmpty } = messageChangeEmail;

const defaultOnSubmit = values => {
  console.log("eventSubmitted", values);
  return { data: { status: 200, message: "success" }, error: {} };
};

const defaultOnSuccess = res => {
  console.log("Success", res);
  return res;
};

const defaultOnError = err => {
  console.log("Error", err);
  return err;
};

class ChangeEmailView extends React.Component {
  state = {};

  render() {
    const { handleSubmit, handleChange, touched, errors, values } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Current Email:
          <br />
          <input
            type="text"
            name="loginName"
            onChange={handleChange}
            value={values.loginName}
          />
          <br />
          {touched.loginName && errors.loginName}
        </p>
        <p>
          New Email:
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          <br />
          {touched.email && errors.email}
        </p>
        <p>
          Password:
          <br />
          <input
            type="text"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          <br />
          {touched.password && errors.password}
        </p>
        <button type="submit">Change Email</button>
      </form>
    );
  }
}

ChangeEmailView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    loginNameEmpty,
    emailEmpty,
    emailWrongFormat,
    passwordEmpty
  }
};

ChangeEmailView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default ChangeEmailForm(ChangeEmailView);
