/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import validateInput from "../validateInput";
import messageForgotEmailStep1 from "./messageForgotEmailStep1";

const ForgotEmailStep1Form = withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    loading: false,
    name: "",
    dob: "",
    ktpNumber: ""
  }),

  validate: (values, { errorMessage }) => {
    const errors = {};
    const { name, dob, ktpNumber } = values;

    const err = { ...messageForgotEmailStep1, ...errorMessage };

    const formatName = validateInput("name", name);
    const formatDob = validateInput("date", dob);
    const formatKtpNumber = validateInput("ktp", ktpNumber);

    if (!name) errors.name = err.nameEmpty;
    else if (!formatName) errors.name = err.nameWrongFormat;

    if (!dob) errors.dob = err.dobEmpty;
    else if (!formatDob) errors.dob = err.dobWrongFormat;

    if (!ktpNumber) errors.ktpNumber = err.ktpEmpty;
    else if (!formatKtpNumber) errors.ktpNumber = err.ktpWrongFormat;

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

export default ForgotEmailStep1Form;
