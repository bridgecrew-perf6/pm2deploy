/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import { getSecurityQuestion } from "../../../api";
import ForgotEmailStep2Form from "./ForgotEmailStep2Form";
import Loading from "../../../components/Loading/Loading";
import messageForgotEmailStep2 from "./messageForgotEmailStep2";

const { questionEmpty, answerEmpty, uniqueKeyEmpty, } = messageForgotEmailStep2;

const defaultOnSubmit = values => {
  console.log("eventSubmitted", values);
  return { data: { status: 200, message: "success" }, error: {} };
};

const defaultOnSuccess = res => {
  console.log("Success", res);
  return res;
};

const defaultOnError = err => {
  console.log("Error", err);
  return err;
};

class ForgotEmailStep2View extends React.Component {
  state = {
    questionList: []
  };

  componentDidMount() {
    this.getSecurityQuestion();
  }

  getSecurityQuestion = async () => {
    const { data } = await getSecurityQuestion();
    if (data && data.list_security_question) {
      const { list_security_question: dataQuestion } = data;
      const list = [];
      dataQuestion.map(item => {
        const { security_code: value, security_question: label } = item;
        return list.push({ value, label });
      });
      this.setState({ questionList: list });
    }
  };

  getQuestionSelect = () => {
    const { questionList } = this.state;
    const { handleChange } = this.props;
    if (!questionList || questionList.length < 1) return <Loading />;
    return (
      <select name="question" onChange={handleChange} defaultValue="empty">
        <option value="empty">--- Chose the question ---</option>
        {questionList.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  };

  getAction = () => {
    const { isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">Get My Email</button>;
  };

  render() {
    const { handleSubmit, handleChange, touched, errors, values } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <p>
          Select your private question:
          <br />
          {this.getQuestionSelect()}
          <br />
          {touched.question && errors.question}
        </p>
        <p>
          Answer your private question:
          <br />
          <input name="answer" value={values.answer} onChange={handleChange} />
          <br />
          {touched.answer && errors.answer}
        </p>
        <br />
        {errors.uniqueKey}
        <br />
        {this.getAction()}
        <br />
      </form>
    );
  }
}

ForgotEmailStep2View.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    questionEmpty,
    answerEmpty,
    uniqueKeyEmpty
  }
};

ForgotEmailStep2View.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};


export default ForgotEmailStep2Form(ForgotEmailStep2View);
