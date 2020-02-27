/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import Loading from "../../../components/Loading/Loading";
import LoginForm from "./LoginForm";

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

export default LoginForm(LoginView);
