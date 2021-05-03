/* eslint linebreak-style: ["error", "windows"] */

import { withFormik } from "formik";
import formAction from "../formAction";
import messageEditProfile from "./messageEditProfile";
import validateInput from "../validateInput";

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
    const { securityQuestion, securityAnswer, interest } = values;

    const err = { ...messageEditProfile, ...message };

    const formatPhone = validateInput("phone", phone);

    if (!phone) errors.phone = err.phoneEmpty;
    else if (!formatPhone) errors.phone = err.phoneWrongFormat;

    if (err.cityEmpty && !city) errors.city = err.cityEmpty;

    if (err.addressEmpty && !address) errors.address = err.addressEmpty;

    if (!interest || interest.length) errors.interest = err.interestEmpty;

    if (!favBrand1 && !favBrand2) errors.favBrand = err.favBrandEmpty;
    else if (favBrand1 === favBrand2) errors.favBrand = err.favBrandSame;

    if (!securityQuestion) errors.securityQuestion = err.securityQuestionEmpty;

    if (!securityAnswer) errors.securityAnswer = err.securityAnswerEmpty;

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
