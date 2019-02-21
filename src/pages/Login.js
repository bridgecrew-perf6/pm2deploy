import React from "react";
import { Field } from "formik";
import SimpleLogin from "../templates/Form/SimpleLogin";

const Login = ({ handleSubmit, errors }) => (
  <form onSubmit={handleSubmit} style={{ color: "blue" }}>
    <Field type="email" name="email" placeholder="Email" />
    {errors.email}
    <Field type="password" name="password" placeholder="Password" />
    {errors.password}
    <button type="submit">Submit</button>
  </form>
);

const LoginLogic = SimpleLogin(Login);

const LoginPage = () => (
  <LoginLogic
    enableRecaptcha
    errorMessage={{
      loginEmailRequired: "E-mail Mesti diisi",
      loginEmailFormat: "email salah format",
      loginPasswordRequired: "Password mesti diisi"
    }}
    loginControl={({ email, password }) => ({
      data: `success with ${email} ${password}`,
      error: "error"
    })}
    onSuccess={data => console.log(data)}
    onError={error => console.log(error)}
    component={props => <Login {...props} />}
  />
);
export default LoginPage;
