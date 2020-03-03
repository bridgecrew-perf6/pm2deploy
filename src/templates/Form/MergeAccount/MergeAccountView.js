/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import MergeAccountForm from "./MergeAccountForm";
import Loading from "../../../components/Loading/Loading";

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

export default MergeAccountForm(MergeAccountView);
