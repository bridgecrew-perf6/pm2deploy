/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageEditProfile from "./messageEditProfile";

const EditProfileForm = withFormik({
  enableReinitialize: true,

  mapPropsToValues: ({ profileData }) => ({
    name: profileData.name || "",
    ktp: profileData.ktp || "",
    email: profileData.email || "",
    dob: profileData.dob || "",
    phone: profileData.phone || "",
    gender: profileData.gender || "",
    city: profileData.city || "",
    address: profileData.address || "",
    securityQuestion: profileData.securityQuestion || "",
    securityAnswer: profileData.securityAnswer || "",
    favBrand1: profileData.favBrand1 || false,
    favBrand2: profileData.favBrand2 || false,
    interest: profileData.interest || false,
    emailPromo: profileData.emailPromo || ""
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
