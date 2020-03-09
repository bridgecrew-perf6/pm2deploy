/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import Proptypes from "prop-types";
import formAction from "../formAction";
import messageLogin from "./messageLogin";
import validateInput from "../validateInput";

const LoginForm = withFormik({
  mapPropsToValues: () => ({ username: "", password: "" }),

  validate: (values, { errorMessage }) => {
    const errors = {};
    const { username, password } = values;
    const err = { ...messageLogin, ...errorMessage };

    const formatEmail = username && validateInput("email", username);

    if (!username || username.length < 1) errors.username = err.usernameEmpty;
    else if (username.length < 3) errors.username = err.usernameTooShort;
    else if (!formatEmail) errors.username = err.usernameWrongFormat;

    if (!password) errors.password = err.usernameEmpty;

    return errors;
  },

  handleSubmit: async (
    values,
    { setSubmitting, props: { onSubmit, onSuccess, onError } }
  ) => {
    const response = await formAction.submit(values, onSubmit);
    formAction.action(response, onSuccess, onError);
    setSubmitting(false);
  }
});

const onSubmit = values => console.log("eventSubmitted", values);

const onSuccess = e => console.log("Success", e);

const onError = e => console.log("Error", e);

LoginForm.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  onSuccess: Proptypes.func,
  onError: Proptypes.func
};

LoginForm.defaultProps = {
  onSubmit,
  onSuccess,
  onError,
  errorMessage: messageLogin
};

export default LoginForm;
