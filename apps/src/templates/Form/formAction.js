/* eslint linebreak-style: ["error", "windows"] */

import { isFunction } from "../../helpers/util";

const noParameter = console.log("Complete the parameter");

const formAction = {
  doSuccess: (data, onSuccess) => {
    if (!data && !onSuccess) return noParameter;
    if (isFunction(onSuccess)) return onSuccess(data);
    return console.log("SUCCESS", data);
  },

  doError: (error, onError) => {
    if (!error && !onError) return noParameter;
    if (isFunction(onError)) return onError(error);
    return console.log("ERROR!", error);
  },

  action: (response, onSuccess, onError) => {
    const res = response;
    if (!res) return console.log("PLEASE FILL RESPONSE");
    const { data, error } = res;
    if (error && error.code) formAction.doError(error, onError);
    else formAction.doSuccess(data, onSuccess);
  },

  submit: async (values, onSubmit) => {
    const none = !values || !onSubmit;
    if (none) return console.log("NO VALUES NO onSubmit FUNCTION");
    return onSubmit(values);
  }
};

export default formAction;
