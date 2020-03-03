/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import MainService from "./base";

const handleGeneralError = error => console.log("General Error", error);

const handleGETRequest = async (api, { ...body }) => {
  const {
    result: {
      body: { data, error }
    }
  } = await MainService(api)
    .doRequest({ query: { ...body } })
    .then(result => result)
    .catch(errorGeneral => {
      handleGeneralError(errorGeneral);
      return {
        result: {
          body: { data: null, error: null }
        },
        errorJS: errorGeneral
      };
    });

  return {
    data,
    error
  };
};

const handlePOSTRequest = async (api, body, asFormData = false) => {
  const formData = new FormData();
  let actualBody = { ...body };

  if (asFormData) {
    for (const key in body) {
      formData.append(key, body[key]);
    }
    actualBody = formData;
  }

  const {
    result: {
      body: { data, error }
    }
  } = await MainService(api)
    .doRequest({
      body: actualBody,
      hooks: {
        before({ payload, next }) {
          const newPayload = { ...payload };
          if (asFormData) delete newPayload.headers["Content-Type"];
          next(newPayload);
        }
      }
    })
    .then(result => result)
    .catch(errorGeneral => {
      handleGeneralError(errorGeneral);
      return {
        result: {
          body: { data: null, error: null }
        },
        errorJS: errorGeneral
      };
    });

  return {
    data,
    error
  };
};

/** Edit this part */
export const getMasterCity = () => handleGETRequest("getMasterCity");

export const getListing = ({ start = 0, length = 10 }) =>
  handlePOSTRequest("getListing", { start, length });

export const loginStatus = () => handlePOSTRequest("loginStatus");

export const authLogin = dataUser => handlePOSTRequest("login", dataUser);

export const deleteAccount = data => handlePOSTRequest("deleteAccount", data);

export const getSecurityQuestion = () => handlePOSTRequest("securityQuestion");

export const forgotEmail = data => handlePOSTRequest("forgotEmail", data);

export const forgotEmailSecurity = data =>
  handlePOSTRequest("forgotEmailSecurity", data);

export default getMasterCity;
