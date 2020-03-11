/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import TncForm from "./TncForm";
import messageTnc from "./messageTnc";

const { tncEmpty } = messageTnc;

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

class TncFormView extends React.Component {
  state = {};

  render() {
    const { handleSubmit, handleChange, values, touched, errors } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkTnc">
          <input
            type="checkbox"
            name={values.tnc.toString()}
            onChange={handleChange}
            id="checkTnc"
          />
          &nbsp;
          <span>
            Gue perokok dewasa berumur 18 tahun ke atas dan setuju dengan nbsp
            bla bla bla
          </span>
          <br />
          <br />
          {touched.tnc && errors.tnc}
          <br />
          <button type="submit">Setuju</button>
        </label>
      </form>
    );
  }
}

TncFormView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  errorMessage: { tncEmpty }
};

TncFormView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  errorMessage: PropTypes.object
};

export default TncForm(TncFormView);
