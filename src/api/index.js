/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import MainService from "./base";

const handleGeneralError = error => console.log("General Error");
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
    .doRequest({ body: actualBody })
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
export const getAllListing = () => handleGETRequest("getListing");

export const getListing = ({ start = 0, length = 10 }) =>
  handlePOSTRequest("getListing", { start, length });

export const authLogin = ({ email, password }) =>
  handlePOSTRequest("authLogin", { email, password });

export default getMasterCity;
