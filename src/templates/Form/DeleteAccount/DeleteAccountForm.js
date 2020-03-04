/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageDeleteAccount from "./messageDeleteAccount";
import validateInput from "../validateInput";

const DeleteAccountForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
    unsubscribe: true,
    permanentdelete: false
  }),

  validate: (values, { message }) => {
    const errors = {};

    const { email, password } = values;
    const err = { ...messageDeleteAccount, ...message };

    const formatEmail = validateInput("email", email);

    if (!email) errors.email = err.emailEmpty;
    else if (!formatEmail) errors.email = err.emailWrongFormat;

    if (!password) errors.password = err.passwordEmpty;

    return errors;
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const { onSubmit, onSuccess, onError } = props;

    const response = await formAction.submit(values, onSubmit);
    formAction.action(response, onSuccess, onError);

    setSubmitting(false);
  }
});

export default DeleteAccountForm;
