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

export default ForgotPasswordForm(ForgotPasswordView);
