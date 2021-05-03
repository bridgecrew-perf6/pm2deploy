/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageRegister from "./messageRegister";
import validateInput from "../validateInput";

const RegisterForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues: () => ({
    name: "",
    ktp: "",
    email: "",
    password: "",
    tnc: "",
    phone: "",
    address: "",
    city: ""
  }),

  validate: (values, message) => {
    const errors = {};
    const { name, ktpNumber, email, password, tnc } = values;
    const { phone, address, city } = values;

    const err = { ...messageRegister, ...message };

    const formatName = name && validateInput("name", name);

    if (!name) errors.name = err.nameEmpty;
    else if (!formatName) errors.name = err.nameWrongFormat;

    if (!ktpNumber) errors.ktp = err.ktpEmpty;

    if (!email) errors.email = err.emailEmpty;

    if (!password) errors.password = err.passwordEmpty;

    if (!tnc) errors.tnc = err.tncUncheck;

    // .
    // .
    // .
    // NON-MANDATORY INPUT VALIDATING. . .

    const emptyPhone = err.phoneEmpty && !phone;
    const formatPhone =
      err.phoneWrongFormat && phone && validateInput("phone", phone);
    if (emptyPhone) errors.phone = err.phoneEmpty;
    else if (formatPhone) errors.phone = err.phoneWrongFormat;

    if (err.cityEmpty && !city) errors.city = err.cityEmpty;

    if (err.addressEmpty && !address) errors.addres = err.addressEmpty;

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

export default RegisterForm;
