import React from "react";
import { Field } from "formik";
import SimpleLogin from "../templates/Form/SimpleLogin";

const Login = props => (
  <div>
    <form onSubmit={props.handleSubmit}>
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
    validate={values => {
      const errors = {};

      if (!values.email) errors.email = "E-mail lo harus diisi";
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Format e-mail salah";

      if (!values.password) errors.password = "Kata sandi lo harus diisi";

      return errors;
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
