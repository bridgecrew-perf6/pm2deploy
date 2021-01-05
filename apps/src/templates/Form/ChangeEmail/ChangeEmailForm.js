/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageChangeEmail from "./messageChangeEmail";
import validateInput from "../validateInput";

const ChangeEmailForm = withFormik({
  mapPropsToValues: () => ({
    loginName: "",
    email: "",
    password: ""
  }),

  validate: (values, { errorMessage }) => {
    const errors = {};
    const { loginName, email, password } = values;
    const err = { ...messageChangeEmail, ...errorMessage };

    const formatEmail = validateInput("email", email);

    if (!loginName) errors.loginName = err.loginNameEmpty;

    if (!email) errors.email = err.emailEmpty;
    else if (!formatEmail) errors.email = err.emailWrongFormat;

    if (!password) errors.password = err.passwordEmpty;

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

export default ChangeEmailForm;
