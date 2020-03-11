/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "./RegisterForm";
import Loading from "../../../components/Loading/Loading";
import messageRegister from "./messageRegister";

const { nameEmpty, nameWrongFormat, ktpEmpty, emailEmpty, passwordEmpty, tncUncheck } = messageRegister;

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

class RegisterView extends React.Component {
  state = {};

  actionView = () => {
    const { isSubmitting } = this.props;
    if (isSubmitting) return <Loading />;
    return <button type="submit">Register</button>;
  };

  render() {
    const { handleSubmit, handleChange, values, touched, errors } = this.props;
    const { name, ktp, dob, email, password } = values;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Nama Lengkap:
          <br />
          <input type="text" name="name" onChange={handleChange} value={name} />
          <br />
          {touched.name && errors.name}
        </p>
        <p>
          KTP:
          <br />
          <input type="text" name="ktp" onChange={handleChange} value={ktp} />
          <br />
          {touched.ktp && errors.ktp}
        </p>
        <p>
          Tanggal Lahir:
          <br />
          <input type="text" name="dob" onChange={handleChange} value={dob} />
          <br />
          {touched.dob && errors.dob}
        </p>
        <p>
          Email
          <br />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
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
            value={password}
          />
          <br />
          {touched.password && errors.password}
        </p>
        <p>
          <label htmlFor="tncRegister">
            <input type="checkbox" id="tncRegister" />
            &nbsp;Harap setujui syarat dan ketentuan registrasi
          </label>
          <br />
          {touched.tnc && errors.tnc}
        </p>
        {this.actionView()}
      </form>
    );
  }
}

RegisterView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    nameEmpty,
    nameWrongFormat,
    ktpEmpty,
    emailEmpty,
    passwordEmpty,
    tncUncheck
  }
};

RegisterView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default RegisterForm(RegisterView);
