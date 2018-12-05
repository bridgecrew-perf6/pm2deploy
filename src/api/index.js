import MainService from "./base";

const handleGETRequest = async (api, { ...body }) => {
  const {
    result: {
      body: { data, error }
    }
  } = await MainService(api).doRequest({ query: { ...body } });
  return {
    data,
    error
  };
};

const handlePOSTRequest = async (api, { ...body }) => {
  const {
    result: {
      body: { data, error }
    }
  } = await MainService(api).doRequest({ body: { ...body } });
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
