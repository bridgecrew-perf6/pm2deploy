/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageMergeAccount from "./messageMergeAccount";

const MergeAccountForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),

  validate: (values, { message }) => {
    const errors = {};
    const { email, password } = values;
    const err = { ...messageMergeAccount, ...message };

    if (!email) errors.email = err.emailEmpty;
    if (!password && email) errors.password = err.passwordEmpty;

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

export default MergeAccountForm;
