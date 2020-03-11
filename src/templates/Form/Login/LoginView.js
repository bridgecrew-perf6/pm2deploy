/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import Proptypes from "prop-types";
import LoginForm from "./LoginForm";
import Loading from "../../../components/Loading/Loading";
import messageLogin from "./messageLogin";

const onSubmit = values => {
  console.log("eventSubmitted", values);
  return { data: { status: 200, message: "success" }, error: {} };
};
const onSuccess = res => {
  console.log("Success", res);
  return res;
};
const onError = err => {
  console.log("Error", err);
  return err;
};

class LoginView extends React.Component {
  state = {};

  render() {
    const { handleSubmit, handleChange, isSubmitting } = this.props;
    const { values, errors, touched } = this.props;
    const { username, password } = values;
    const { username: errUsername, password: errPassword } = errors;
    const { username: touUsername, password: touPassword } = touched;
    const btnSubmit = <button type="submit">Login</button>;
    const loadingView = <Loading align="left" />;
    const action = isSubmitting ? loadingView : btnSubmit;

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChange}
        />
        <br />
        {touUsername && errUsername}
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <br />
        {touPassword && errPassword}
        <br />
        <br />
        {action}
      </form>
    );
  }
}

LoginView.defaultProps = {
  onSubmit,
  onSuccess,
  onError,
  errorMessage: messageLogin
};

LoginView.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  onSuccess: Proptypes.func,
  onError: Proptypes.func,
  errorMessage: Proptypes.object
};

export default LoginForm(LoginView);
