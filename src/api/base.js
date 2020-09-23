import { ApiService, ApiTree } from "@apicase/services";
import fetch from "@apicase/adapter-fetch";
import Cookies from "js-cookie";
import apiList from "./list";

// VARIABLE LIST
// make sure match for your APP
const appBaseUrl = process.env.REACT_APP_BASE_URL;
const appEnv = process.env.REACT_APP_ENVIRONMENT;
const appName = process.env.REACT_APP_NAME;
const appSecretKey = process.env.REACT_APP_SECRET_KEY;
const appDeviceType = process.env.REACT_APP_DEVICE_TYPE;
const appTokenHeader = process.env.REACT_APP_TOKEN_HEADER;

const urlGetToken = "api/token/get";
const urlRefreshToken = "api/token/get";
// END OF VARIABLE LIST

// FUNCTION GROUP
const setCookie = (name, value) => {
  // let secure = false;
  // if(appEnv==="production" || appEnv === "development") secure = true;
  Cookies.set(name, value, { expires: 1, path: "/" });
};

const generateRandomString = (length) => {
  let text = "";
  const character =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i += 1)
    text += character.charAt(Math.floor(Math.random() * character.length));

  return text;
};

const getDeviceId = new Promise((resolve) => {
  const deviceId = generateRandomString(36);
  if (window.requestIdleCallback) requestIdleCallback(() => resolve(deviceId));
  else resolve(deviceId);
});

const serviceLogger = (event, result) => {
  if (appEnv === "local") console.log("serviceLogger: ", { event }, { result });
  return null;
};
// END OF FUNCTION GROUP

const RootService = new ApiService({
  adapter: fetch,
  url: appBaseUrl,
  mode: "cors",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  options: { timeout: 1000 },
});

// SERVICE LOGGER FOR API ACTIVITY & RESPONSE
RootService.on("done", (result) => serviceLogger("done", result));

RootService.on("fail", (result) => serviceLogger("fail", result));

RootService.on("finish", (result) => serviceLogger("finish", result));

RootService.on("start", (result) => serviceLogger("start", result));

RootService.on("cancel", (result) => serviceLogger("cancel", result));

RootService.on("error", (result) => serviceLogger("error", result));
// END of SERVICE LOGGER FOR API ACTIVITY & RESPONSE

// GET  TOKEN API & SERVICE
const TokenService = (url = urlGetToken) =>
  RootService.extend({
    url,
    method: "POST",
    body: {
      name: appName,
      secret_key: appSecretKey,
      device_type: appDeviceType,
      token: Cookies.get("token"),
      refresh_token: Cookies.get("refresh-token"),
    },
    hooks: {
      before({ payload, next }) {
        getDeviceId.then((result) => {
          const newPayload = { ...payload };
          newPayload.body = {
            ...payload.body,
            device_id: result,
          };
          next(newPayload);
        });
      },
    },
  }).on("done", (result) => {
    const {
      token: { token_code: tokenCode, refresh_token: refreshToken },
    } = result.body.data;
    setCookie("token", tokenCode);
    setCookie("refresh-token", refreshToken);
  });
// END OF GET TOKEN API & SERVICE

const GetToken = TokenService();
const RefreshToken = TokenService(urlRefreshToken);

//  HIT TOKEN ACTIVITY
const hitToken = async (payload, retry, next, urlToken = urlGetToken) => {
  let fn = GetToken;
  if (urlToken === urlRefreshToken) fn = RefreshToken;
  const { success, result } = await fn.doSingleRequest();
  if (success) {
    const {
      token: { token_code: tokenCode },
    } = result.body.data;
    const newPayload = { ...payload };
    newPayload.headers = { ...payload.headers, [appTokenHeader]: tokenCode };
    retry(newPayload);
    // next(result);
  }
};
// END OF HIT TOKEN ACTIVITY

// 401 states
// additional activity
const do401 = () => {
  Cookies.remove("is-login");
  if (window.fcWidget) window.fcWidget.user.clear();
};
// END OF 401 states

// FAIL API ACTIVITY
const failActivity = async (errorCode, payload, retry, result, next) => {
  if (errorCode === 402) await hitToken(payload, retry, next);
  else if (errorCode === 406)
    await hitToken(payload, retry, next, urlRefreshToken);
  else if (errorCode === 401) {
    do401();
    await hitToken(payload, retry, next, urlRefreshToken);
  }
};
// END OF FAIL API ACTIVITY

const MainService = new ApiTree(RootService, [
  {
    url: "api",
    children: apiList,
    hooks: {
      before({ payload, next }) {
        const token = Cookies.get("token");
        const newPayload = { ...payload };
        newPayload.headers = {
          ...payload.headers,
          [appTokenHeader]: token,
        };
        next(newPayload);
      },
      async fail({ payload, retry, result, next }) {
        const errorCode = result.status;
        // console.log(`FAIL on: ${errorCode}`);
        await failActivity(errorCode, payload, retry, result, next);
        next(result);
      },
      async done({ result, fail, next }) {
        next(result);
        return true;
      },
    },
  },
]);

export default MainService;
