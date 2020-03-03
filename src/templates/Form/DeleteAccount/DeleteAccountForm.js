/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageDeleteAccount from "./messageDeleteAccount";

const DeleteAccountForm = withFormik({
  mapPropsToValues: () => ({
    loading: false,
    email: "",
    password: "",
    unsubscribe: true,
    permanentdelete: false
  }),

  validate: (values, { message }) => {
    const errors = {};

    const { email, password } = values;
    const err = { ...messageDeleteAccount, ...message };

    if (!email) errors.email = err.emailEmpty;

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
