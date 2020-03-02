/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import messageActivateAccount from "./messageActivateAccount";
import validateInput from "../validateInput";
import formAction from "../formAction";
import { isFunction } from "../../../helpers/util";

const ActivateAccountForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),

  validate: (values, { message }) => {
    const { email, password } = values;
    const err = { ...messageActivateAccount, ...message };

    const errors = {};
    const formatEmail = validateInput("email", email);

    if (!email) errors.email = err.emailEmpty;
    else if (!formatEmail) errors.email = err.emailWrongFormat;

    if (!password) errors.password = err.passwordEmpty;

    return errors;
  },

  handleSubmit: async (
    values,
    { setSubmitting, props: { onAction, onSubmit, onSuccess, onError } }
  ) => {
    const response = await formAction.submit(values, onSubmit);
    if (isFunction(onAction)) onAction(values);
    else formAction.action(response, onSuccess, onError);

    setSubmitting(false);
  }
});

export default ActivateAccountForm;
