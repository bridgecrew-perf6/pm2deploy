import React from "react";
import { Field } from "formik";
import withSimpleLogin from "../templates/Form/withSimpleLogin";
import withRecaptcha from "../templates/Form/withRecaptcha";

const LoginView = withSimpleLogin(
  withRecaptcha(({ handleSubmit, handleReset, errors, touched }) => (
    <form onSubmit={handleSubmit}>
      <Field type="email" name="email" placeholder="Email" />
      {touched.email && errors.email}
      <Field type="password" name="password" placeholder="Password" />
      {touched.password && errors.password}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  ))
);

const LoginPage = () => (
  <LoginView
    errorMessage={{
      loginEmailRequired: "E-mail Mesti diisi",
      loginEmailFormat: "email salah format",
      loginPasswordRequired: "Password mesti diisi"
    }}
    loginControl={formData =>
      new Promise((resolve, reject) =>
        setTimeout(
          resolve({
            data: `success with ${formData.email} ${formData.password}, ${
              formData["g-recaptcha"]
            }`,
            error: ""
          }),
          5000
        )
      )
    }
    onSuccess={data => console.log(data)}
    onError={error => console.log(error)}
    onErrorJS={error => console.log(error)}
  />
);
export default LoginPage;
