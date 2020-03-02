/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import ChangeEmailForm from "./ChangeEmailForm";

class ChangeEmailView extends React.Component {
  state = {};

  render() {
    const { handleSubmit, handleChange, touched, errors, values } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Now Email:
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

export default ChangeEmailForm(ChangeEmailView);
