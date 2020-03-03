/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageEditProfile from "./messageEditProfile";

const EditProfileForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues: ({ profileData: data }) => ({
    name: (data && data.name) || "",
    ktp: (data && data.ktp) || "",
    email: (data && data.email) || "",
    dob: (data && data.dob) || "",
    phone: (data && data.phone) || "",
    gender: (data && data.gender) || "",
    city: (data && data.city) || "",
    address: (data && data.address) || "",
    securityQuestion: (data && data.securityQuestion) || "",
    securityAnswer: (data && data.securityAnswer) || "",
    favBrand1: (data && data.favBrand1) || false,
    favBrand2: (data && data.favBrand2) || false,
    interest: (data && data.interest) || false,
    emailPromo: (data && data.emailPromo) || ""
  }),

  validate: (values, { message }) => {
    const errors = {};

    const { phone, city, address, favBrand1, favBrand2 } = values;
    const { securityQuestion, securityAnswer, interest, emailPromo } = values;

    const err = { ...messageEditProfile, ...message };

    if (!phone) errors.phone = err.phoneEmpty;

    if (err.cityEmpty && !city) errors.city = err.cityEmpty;

    return errors;
  },

  handleSubmit: async (
    values,
    { setSubmitting, props: { onSubmit, onSuccess, onError } }
  ) => {
    const response = await formAction.submit(values, onSubmit);
    formAction.action(response, onSuccess, onError);

    setTimeout(() => {}, 1000);

    setSubmitting(false);
  }
});

export default EditProfileForm;
