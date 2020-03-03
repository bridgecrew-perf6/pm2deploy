/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import DeleteAccountForm from "./DeleteAccountForm";
import Field from "../../../components/Field/Field";
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
        <Field error={touched.email && errors.email}>
          Email
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="email"
            value={email}
          />
        </Field>
        <Field error={touched.password && errors.password}>
          Password
          <br />
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </Field>
        <Field error={touched.unsubscribe && errors.unsubscribe}>
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
        </Field>
        <Field error={touched.permanentdelete && errors.permanentdelete}>
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
        </Field>
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
