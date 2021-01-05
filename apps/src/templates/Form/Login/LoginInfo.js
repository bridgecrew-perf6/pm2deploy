/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import { authLogin } from "../../../api";
import LoginView from "./LoginView";

class LoginInfo extends React.Component {
  state = {};

  submitLogin = async values => {
    const { username: email, password } = values;
    const response = await authLogin({ email, password });
    return response;
  };

  onSuccess = data => console.log("Success", data);

  onError = err => console.log("Error", err);

  errMessage = () => {
    const username = { usernameEmpty: "Tidak boleh kosong" };
    const password = { passwordEmpty: "Isi password cuy" };
    const message = { ...username, ...password };
    return message;
  };

  render() {
    return (
      <HomeSection title="Login">
        <hr />
        <div className="flex-content">
          <div>
            Has 3 props
            <br />
            <ul>
              <li>
                <p>
                  <b>onSubmit</b>
                  <br />
                  Do submit handle form
                  <br />
                  Default: request API login
                </p>
              </li>
              <li>
                <p>
                  <b>onSuccess</b>
                  <br />
                  Do event after API login is successfull
                  <br />
                  Default: console.log()
                </p>
              </li>
              <li>
                <p>
                  <b>onError</b>
                  <br />
                  Do event after API login is failure / has error
                  <br />
                  Default: console.log()
                </p>
              </li>
              <li>
                Exported as&nbsp;
                <b>LoginForm</b>
              </li>
              <li>
                <p>
                  <b>Dont forget</b>
                  &nbsp;to spread parent props!
                </p>
              </li>
            </ul>
          </div>
          <hr />
          <div className="form">
            <h3>View</h3>
            <div>
              <LoginView
                onSubmit={this.submitLogin}
                onSuccess={this.onSuccess}
                onError={this.onError}
                message={this.errMessage()}
              />
            </div>
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default LoginInfo;
