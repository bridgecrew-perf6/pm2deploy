import React from "react";
import { Field } from "formik";
import withSimpleLogin, {
  withRecaptcha
} from "../templates/Form/withSimpleLogin";

const LoginView = withSimpleLogin(
  withRecaptcha(({ handleSubmit, values, errors, touched }) => (
    <form onSubmit={handleSubmit}>
      {JSON.stringify(values)}
      {JSON.stringify(touched)}
      {JSON.stringify(errors)}
      <Field type="email" name="email" placeholder="Email" />
      {touched.email && errors.email}
      <Field type="password" name="password" placeholder="Password" />
      {touched.password && errors.password}
      <button type="submit">Submit</button>
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
    loginControl={formData => {
      return new Promise((resolve, reject) =>
        setTimeout(
          resolve({
            data: `success with ${formData.email} ${formData.password}, ${
              formData["g-recaptcha"]
            }`,
            error: ""
          }),
          5000
        )
      );
    }}
    onSuccess={data => console.log(data)}
    onError={error => console.log(error)}
    onErrorJS={error => console.log(error)}
  />
);
export default LoginPage;
