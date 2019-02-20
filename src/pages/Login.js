import React from "react";
import { Field } from "formik";
import SimpleLogin from "../templates/Form/SimpleLogin";

const Login = props => (
  <div>
    <form onSubmit={props.handleSubmit} style={{ color: "blue" }}>
      <Field type="email" name="email" placeholder="Email" />
      {props.errors.email}
      <Field type="password" name="password" placeholder="Password" />
      {props.errors.password}
      <button type="submit">Submit</button>
    </form>
  </div>
);
const LoginLogic = SimpleLogin(Login);

const LoginPage = () => (
  <LoginLogic
    errorMessage={{
      loginEmailRequired: "E-mail Mesti diisi",
      loginEmailFormat: "email salah format",
      loginPasswordRequired: "Password mesti diisi"
    }}
    loginControl={({ email, password }) => ({
      data: "success",
      error: "asdasd"
    })}
    onSuccess={data => console.log(data)}
    onError={error => console.log(error)}
  />
);
export default LoginPage;
