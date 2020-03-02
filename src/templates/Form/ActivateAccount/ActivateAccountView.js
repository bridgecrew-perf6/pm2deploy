/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import ActivateAccountForm from "./ActivateAccountForm";

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

export default ActivateAccountForm(ActivateAccountView);
