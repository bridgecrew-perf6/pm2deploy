/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import DeleteAccountForm from "./DeleteAccountForm";
import Loading from "../../../components/Loading/Loading";

class DeleteAccountView extends React.Component {
  state = {};

  getAction = () => {
    const { submitText, isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">{submitText}</button>;
  };

  render() {
    const { handleSubmit, handleChange, touched } = this.props;
    const { errors, values } = this.props;
    const { unsubscribeText, permanentDeleteText } = this.props;
    const { email, password, unsubscribe, permanentdelete } = values;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Email
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="email"
            value={email}
          />
          <br />
          {touched.email && errors.email}
        </p>
        <p>
          Password
          <br />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
          <br />
          {touched.password && errors.password}
        </p>
        <p>
          <label htmlFor="unsubscribe">
            <input
              type="checkbox"
              name="unsubscribe"
              id="unsubscribe"
              checked={unsubscribe}
              onChange={handleChange}
            />
            <span>{unsubscribeText}</span>
          </label>
          <br />
          {touched.unsubscribe && errors.unsubscribe}
        </p>
        <p>
          <label htmlFor="permanentdelete">
            <input
              type="checkbox"
              name="permanentdelete"
              id="permanentdelete"
              checked={permanentdelete}
              onChange={handleChange}
            />
            <span>{permanentDeleteText}</span>
          </label>
          <br />
          {touched.permanentdelete && errors.permanentdelete}
        </p>
        <br />
        {this.getAction()}
      </form>
    );
  }
}

DeleteAccountView.defaultProps = {
  unsubscribeText: "Berhenti berlangganan",
  permanentDeleteText: "Hapus akun gue secara permanen",
  submitText: "Hapus Akun Gue"
};

export default DeleteAccountForm(DeleteAccountView);
