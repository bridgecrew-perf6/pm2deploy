/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageTnc from "./messageTnc";

const TncForm = withFormik({
  mapPropsToValues: () => ({ tnc: false }),

  validate: (values, { message }) => {
    const errors = {};
    const err = { ...messageTnc, ...message };
    if (!values.tnc) errors.tnc = err.tncEmpty;
    return errors;
  },

  handleSubmit: (
    values,
    { setSubmitting, props: { onSubmit, onSuccess, onError } }
  ) => {
    const response = formAction.submit(values, onSubmit);
    formAction.action(response, onSuccess, onError);
    setSubmitting(false);
  }
});

export default TncForm;
