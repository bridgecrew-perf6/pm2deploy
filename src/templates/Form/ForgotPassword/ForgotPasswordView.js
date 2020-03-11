/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import Loading from "../../../components/Loading/Loading";
import ForgotPasswordForm from "./ForgotPasswordForm";
import messageForgotPassword from "./messageForgotPassword";

const { emailEmpty, emailwrongFormat } = messageForgotPassword;

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

class ForgotPasswordView extends React.Component {
  state = {};

  getAction = () => {
    const { isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">KIRIM EMAIL SEKARANG</button>;
  };

  render() {
    const { handleSubmit, handleChange } = this.props;
    const { touched, values, errors } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        Email:
        <br />
        <input name="email" onChange={handleChange} value={values.email} />
        <br />
        {touched.email && errors.email}
        <br />
        <br />
        {this.getAction()}
        <br />
        <br />
      </form>
    );
  }
}

ForgotPasswordView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    emailEmpty,
    emailwrongFormat
  }
};

ForgotPasswordView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default ForgotPasswordForm(ForgotPasswordView);
