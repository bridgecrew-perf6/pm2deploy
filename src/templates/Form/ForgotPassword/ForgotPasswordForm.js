/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import PropTypes from "prop-types";
import formAction from "../formAction";
import validateInput from "../validateInput";
import messageForgotPassword from "./messageForgotPassword";

const ForgotPasswordForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    email: ""
  }),

  validate: (values, { errorMessage }) => {
    const errors = {};
    const { email } = values;
    const err = { ...messageForgotPassword, ...errorMessage };

    const formatEmail = validateInput("email", email);

    if (!email) errors.email = err.emailEmpty;
    else if (!formatEmail) errors.email = err.emailWrongFormat;

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

ForgotPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
};

export default ForgotPasswordForm;
