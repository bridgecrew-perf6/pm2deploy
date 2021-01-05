/* eslint linebreak-style: ["error", "windows"] */

const forgotEmailValidate = {
  step1: {
    name: {
      empty: "Please fill your fullname"
    },
    dob: {
      empty: "Please fill your date of birth"
    },
    ktpNumber: {
      empty: "Please fill your ID number",
      wrongFormat: "Invalid format email"
    }
  }
};

export default forgotEmailValidate;
