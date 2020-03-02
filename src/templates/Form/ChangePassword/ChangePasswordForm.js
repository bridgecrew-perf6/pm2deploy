/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import validateInput from "../validateInput";
import messageChangePassword from "./messageChangePassword";

const ChangePasswordForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    loginName: "",
    sessionKey: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }),

  validate: (values, { message }) => {
    const errors = {};
    const { loginName, newPassword, confirmPassword } = values;
    const err = { ...messageChangePassword, ...message };

    const formatEmail = loginName && validateInput("email", loginName);

    const passwordNumber = validateInput("passwordNumber", newPassword);
    const passwordSpecial = validateInput("passwordSpecial", newPassword);
    const passwordMin = validateInput("passwordLimit", newPassword);
    const passwordUppercase = validateInput("passwordChar", newPassword);

    if (!loginName) errors.loginName = err.loginNameEmpty;
    else if (!formatEmail) errors.loginName = err.loginNameWrongFormat;

    if (!newPassword) errors.newPassword = err.passwordEmpty;
    else if (!passwordNumber) errors.newPassword = err.passwordNoNumber;
    else if (!passwordMin) errors.newPassword = err.passwordMinChar;
    else if (!passwordUppercase) errors.newPassword = err.passwordNoUppercase;
    else if (!passwordSpecial) errors.newPassword = err.passwordNoSpecial;

    if (!confirmPassword) errors.confirmPassword = err.passwordEmpty;
    else if (confirmPassword !== newPassword)
      errors.confirmPassword = err.passwordNotSame;

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

export default ChangePasswordForm;
