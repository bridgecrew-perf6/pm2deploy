/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import TncForm from "./TncForm";

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

export default TncForm(TncFormView);
