/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import MergeAccountForm from "./MergeAccountForm";
import Loading from "../../../components/Loading/Loading";
import messageMergeAccount from "./messageMergeAccount";

const { emailEmpty, passwordEmpty } = messageMergeAccount;

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

class MergeAccountView extends React.Component {
  state = {};

  getActionView = () => {
    const { isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">Merge my account</button>;
  };

  render() {
    const { values, errors, touched, handleSubmit, handleChange } = this.props;
    const optMail1 = "hanifah@halu.id";
    const optMail2 = "deon@om.id";
    const disablePassword = !values.email;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor={optMail1}>
            <input
              type="radio"
              id={optMail1}
              value={optMail1}
              onChange={handleChange}
              name="email"
            />
            {optMail1}
          </label>
        </p>
        <p>
          <label htmlFor={optMail2}>
            <input
              type="radio"
              id={optMail2}
              value={optMail2}
              onChange={handleChange}
              name="email"
            />
            {optMail2}
          </label>
        </p>
        {touched.email && errors.email}
        <p>
          Password:
          <br />
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            disabled={disablePassword}
          />
          <br />
          {touched.password && errors.password}
        </p>
        <br />
        {this.getActionView()}
      </form>
    );
  }
}

MergeAccountView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: {
    emailEmpty,
    passwordEmpty
  }
};

MergeAccountView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default MergeAccountForm(MergeAccountView);
