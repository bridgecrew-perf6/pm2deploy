/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import ForgotEmailStep1Form from "./ForgotEmailStep1Form";

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

export default ForgotEmailStep1Form(ForgotEmailStep1View);
