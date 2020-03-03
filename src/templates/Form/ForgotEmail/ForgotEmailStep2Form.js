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

  validate: (values, { message }) => {
    const errors = {};
    const { question, answer } = values;

    const err = { ...messageForgotEmailStep2, message };

    const emptyQuestion = !question || question === "empty";

    if (emptyQuestion) errors.question = err.questionEmpty;
    if (!answer) errors.answer = err.answerEmpty;

    return errors;
  },

  handleSubmit: async (
    values,
    { setSubmitting, props: { uniqueKey, onSubmit, onSuccess, onError } }
  ) => {
    if (uniqueKey) {
      const response = await formAction.submit(values, onSubmit);
      formAction.action(response, onSuccess, onError);
    } else console.log("NO UNIQUE KEY FOUND");

    setSubmitting(false);
  }
});

export default ForgotEmailStep2Form;
