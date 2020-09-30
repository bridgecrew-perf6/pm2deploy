import MainService from "./base";

const handleGeneralError = (error) => console.log("General Error", error);

const handleGETRequest = async (api, { ...body }) => {
  const {
    result: {
      body: { data, error, code },
    },
  } = await MainService(api)
    .doRequest({ query: { ...body } })
    .then((result) => result)
    .catch((errorGeneral) => {
      handleGeneralError(errorGeneral);
      return {
        result: {
          body: { data: null, error: null },
        },
        errorJS: errorGeneral,
      };
    });

  return {
    code,
    data,
    error,
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
      body: { data, error, code },
    },
  } = await MainService(api)
    .doRequest({
      body: actualBody,
      hooks: {
        before({ payload, next }) {
          const newPayload = { ...payload };
          if (asFormData) delete newPayload.headers["Content-Type"];
          next(newPayload);
        },
      },
    })
    .then((result) => result)
    .catch((errorGeneral) => {
      handleGeneralError(errorGeneral);
      return {
        result: {
          body: { data: null, error: null },
        },
        errorJS: errorGeneral,
      };
    });

  if (error) console.log(error);

  return {
    code,
    data,
    error,
  };
};

/** Edit this part */
export const getArticleList = () => handleGETRequest("getArticleList");

export const getArticleDetail = (id) =>
  handlePOSTRequest("getArticleDetail", { id });

export const getToken = (data) => handlePOSTRequest("getToken", data);
