/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import ActivateAccountForm from "./ActivateAccountForm";
import messageActivateAccount from "./messageActivateAccount";

const { emailEmpty, emailWrongFormat, passwordEmpty } = messageActivateAccount;

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

class ActivateAccountView extends React.Component {
  state = {};

  render() {
    const { handleChange, handleSubmit, values, touched, errors } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Email:
          <br />
          <input name="email" value={values.email} onChange={handleChange} />
          <br />
          {touched.email && errors.email}
        </p>
        <p>
          Password:
          <br />
          <input
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <br />
          {touched.password && errors.password}
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    );
  }
}

ActivateAccountView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: { emailEmpty, emailWrongFormat, passwordEmpty }
};

ActivateAccountView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default ActivateAccountForm(ActivateAccountView);
