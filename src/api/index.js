import MainService from "./base";

const handleErrorResponse = (error) => console.log(error);

const handleGETRequest = async (api, { ...body }) => {
  const {
    result: {
      body: { data, error },
    },
  } = await MainService(api)
    .doRequest({ query: { ...body } })
    .then((result) => result)
    .catch((errorGeneral) => {
      handleErrorResponse(errorGeneral);
      return {
        result: {
          body: { data: null, error: null },
        },
        errorJS: errorGeneral,
      };
    });

  return {
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
      body: { data, error },
    },
    errorJS,
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
    .catch((errorResponse) => {
      handleErrorResponse(errorResponse);
      return {
        result: {
          body: { data: null, error: null },
        },
        errorJS: errorResponse,
      };
    });

  if (error) console.log(error);

  return {
    data,
    error,
    errorJS,
  };
};

/** Edit this part */
export const getArticleList = () => handlePOSTRequest("getArticleList");

export const getArticleDetail = (id) =>
  handlePOSTRequest("getArticleDetail", { id });
