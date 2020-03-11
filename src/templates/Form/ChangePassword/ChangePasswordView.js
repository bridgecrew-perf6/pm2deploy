/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import ChangePasswordForm from "./ChangePasswordForm";
import Loading from "../../../components/Loading/Loading";
import messageChangePassword from "./messageChangePassword";

const { loginNameEmpty, loginNameWrongFormat, passwordEmpty, passwordMinChar, passwordNoNumber, passwordNoSpecial, passwordNoUppercase, passwordNotSame } = messageChangePassword;

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

class ChangePasswordView extends React.Component {
  state = {};

  getAction = () => {
    const { isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">Submit</button>;
  };

  render() {
    const { values, touched, handleChange, handleSubmit, errors } = this.props;
    console.log(this.props);
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Email:
          <br />
          <input
            type="text"
            name="loginName"
            value={values.loginName}
            onChange={handleChange}
          />
          <br />
          {touched.loginName && errors.loginName}
        </p>
        <p>
          New Password:
          <br />
          <input
            type="text"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
          />
          <br />
          {touched.newPassword && errors.newPassword}
        </p>
        <p>
          Confirm Password:
          <br />
          <input
            type="text"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <br />
          {touched.confirmPassword && errors.confirmPassword}
        </p>
        {this.getAction()}
      </form>
    );
  }
}

ChangePasswordView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    loginNameEmpty,
    loginNameWrongFormat,
    passwordEmpty,
    passwordMinChar,
    passwordNoNumber,
    passwordNoSpecial,
    passwordNoUppercase,
    passwordNotSame
  }
};

ChangePasswordView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default ChangePasswordForm(ChangePasswordView);
