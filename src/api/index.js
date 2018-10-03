import MainService from "./base";

const handleRequest = async (api, { ...body }) => {
  const {
    result: {
      body: { data, error }
    }
  } = await MainService(api).doRequest({ ...body });
  return {
    data,
    error
  };
};

/** Edit this part */
export const getMasterCity = () => handleRequest("getMasterCity");

export const authLogin = ({ email, password }) =>
  handleRequest("authLogin", { email, password });

export default getMasterCity;
