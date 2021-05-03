/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageForgotEmailStep2 from "./messageForgotEmailStep2";

const ForgotEmailStep2Form = withFormik({
  enableReinitialize: true,

  mapPropsToValues: ({ uniqueKey }) => ({
    uniqueKey,
    question: "",
    answer: ""
  }),

  validate: (values, { errorMessage }) => {
    const errors = {};
    const { question, answer, uniqueKey } = values;

    const err = { ...messageForgotEmailStep2, ...errorMessage };

    const emptyQuestion = !question || question === "empty";

    if (emptyQuestion) errors.question = err.questionEmpty;
    if (!answer) errors.answer = err.answerEmpty;
    // if (!uniqueKey) errors.uniqueKey = err.uniqueKeyEmpty;

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

export default ForgotEmailStep2Form;
