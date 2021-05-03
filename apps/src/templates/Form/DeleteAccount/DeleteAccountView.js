/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import DeleteAccountForm from "./DeleteAccountForm";
import Loading from "../../../components/Loading/Loading";
import messageDeleteAccount from "./messageDeleteAccount";

const { emailEmpty, emailWrongFormat, passwordEmpty } = messageDeleteAccount;

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

class DeleteAccountView extends React.Component {
  state = {};

  getAction = () => {
    const { submitText, isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">HAPUS AH!</button>;
  };

  render() {
    const { handleSubmit, handleChange, touched } = this.props;
    const { errors, values } = this.props;
    const { unsubscribeText, permanentDeleteText } = this.props;
    const { email, password, unsubscribe, permanentdelete } = values;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Email
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="email"
            value={email}
          />
          <br />
          {touched.email && errors.email}
        </p>
        <p>
          Password
          <br />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
          <br />
          {touched.password && errors.password}
        </p>
        <p>
          <label htmlFor="unsubscribe">
            <input
              type="checkbox"
              name="unsubscribe"
              id="unsubscribe"
              checked={unsubscribe}
              onChange={handleChange}
            />
            <span>Berhenti dari segala email fufufu yang tidak huhuhu</span>
          </label>
          <br />
          {touched.unsubscribe && errors.unsubscribe}
        </p>
        <p>
          <label htmlFor="permanentdelete">
            <input
              type="checkbox"
              name="permanentdelete"
              id="permanentdelete"
              checked={permanentdelete}
              onChange={handleChange}
            />
            <span>HAPUS AKUN SAYAAAA!</span>
          </label>
          <br />
          {touched.permanentdelete && errors.permanentdelete}
        </p>
        <br />
        {this.getAction()}
      </form>
    );
  }
}

DeleteAccountView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    emailEmpty,
    emailWrongFormat,
    passwordEmpty
  }
};

DeleteAccountView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default DeleteAccountForm(DeleteAccountView);
