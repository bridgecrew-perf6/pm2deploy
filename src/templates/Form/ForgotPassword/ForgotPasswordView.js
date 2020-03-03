/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import Loading from "../../../components/Loading/Loading";
import ForgotPasswordForm from "./ForgotPasswordForm";

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
        <h3>View</h3>
        Email:
        <br />
        <input name="email" onChange={handleChange} value={values.email} />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <br />
        {this.getAction()}
        <br />
        <br />
      </form>
    );
  }
}

export default ForgotPasswordForm(ForgotPasswordView);
