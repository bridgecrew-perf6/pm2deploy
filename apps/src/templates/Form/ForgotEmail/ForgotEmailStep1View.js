/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import ForgotEmailStep1Form from "./ForgotEmailStep1Form";
import messageForgotEmailStep1 from "./messageForgotEmailStep1";

const {
  nameEmpty,
  nameWrongFormat,
  dobEmpty,
  dobWrongFormat,
  ktpEmpty,
  ktpWrongFormat
} = messageForgotEmailStep1;

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

class ForgotEmailStep1View extends React.Component {
  state = {};

  render() {
    const { handleSubmit, handleChange, touched, errors } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Nama Lengkap Sesuai KTP
          <br />
          <input
            type="text"
            placeholder="Nama lengkap sesuai KTP (Case Sensitive)"
            onChange={handleChange}
            name="name"
          />
          <br />
          {touched.name && errors.name}
        </p>
        <p>
          Tanggal Lahir
          <br />
          <input
            type="text"
            placeholder="DD-MM-YYYY"
            onChange={handleChange}
            name="dob"
          />
          <br />
          {touched.dob && errors.dob}
        </p>
        <p>
          Nomor KTP
          <br />
          <input
            type="text"
            placeholder="Nomor KTP"
            onChange={handleChange}
            name="ktpNumber"
          />
          <br />
          {touched.ktpNumber && errors.ktpNumber}
        </p>
        <p>
          <button type="submit">Show My Email</button>
        </p>
      </form>
    );
  }
}

ForgotEmailStep1View.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    nameEmpty,
    nameWrongFormat,
    dobEmpty,
    dobWrongFormat,
    ktpEmpty,
    ktpWrongFormat
  }
};

ForgotEmailStep1View.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default ForgotEmailStep1Form(ForgotEmailStep1View);
