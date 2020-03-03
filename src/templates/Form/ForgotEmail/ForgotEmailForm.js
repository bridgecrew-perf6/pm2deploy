/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import ForgotEmailStep1View from "./ForgotEmailStep1View";
import ForgotEmailStep2View from "./ForgotEmailStep2View";

class ForgotEmailForm extends React.Component {
  state = {
    step: "1"
  };

  submitForm1 = values => {
    console.log("Submitted", values);
    return {
      data: { status: "200", unique_key: "1234abcdefgh" },
      error: {}
    };
  };

  formStep2 = () => {
    const message = {
      questionEmpty: "Itu pilih dulu pertanyaanya",
      answerEmpty: "Jawab lah kalo udah pilih pertanyaannya"
    };
    const onSubmit = values => console.log("SUBMITTED FORM 2", values);
    return <ForgotEmailStep2View onSubmit={onSubmit} message={message} />;
  };

  formStep1 = () => {
    const onSubmit = values => {
      console.log("SUBMITTED FORM 1 ", values);
      this.setState({ step: "2" });
      return { data: "200", message: "Message" };
    };
    const message = { nameEmpty: "Nama gabisa kosong boss" };
    return <ForgotEmailStep1View onSubmit={onSubmit} message={message} />;
  };

  formView = () => {
    const { step } = this.state;
    if (step === "2") return this.formStep2();
    return this.formStep1();
  };

  render() {
    return this.formView();
  }
}

export default ForgotEmailForm;
