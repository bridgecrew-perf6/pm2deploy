/* eslint linebreak-style: ["error", "windows"] */

export function checkdate(v) {
  const l = v.replace(/[^0-9]/g, "").length;
  const p = v.split("-");
  const pd = new Date(p[2], p[1] - 1, p[0]);
  return l === 8 && pd && pd.getMonth() + 1 === Number(p[1]);
}

const checkNumber = value => /$[0-9]$/.test(value);

const checkName = value => /^[a-zA-Z][a-zA-Z\s]+[a-zA-Z]$/.test(value);

const checkNameInput = value => /^$|^([a-zA-Z]+[\s]?){1,10}$/.test(value);

const checkEmail = value =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value
  );

const checkPhone = value =>
  /^(\+?62|0[1-9])[\s|\d]+$/.test(value) &&
  value.length >= 10 &&
  value.length <= 15;

const checkPhoneInput = value => /^$|^0([0-9]{1,14})?$/.test(value);

const checkKTP = value => {
  const d = value.substr(6, 2);
  const m = value.substr(8, 2);
  let y = value.substr(10, 2);
  let df = Number(d) - 40;
  df = df < 10 ? `0${df}` : df;
  y = y >= 2 && y < 45 ? `underAge` : `19${y}`;

  if (y === "underAge") return false;
  return /^[0-9]{16}$/.test(value) && checkdate(`${d > 40 ? df : d}-${m}-${y}`);
};

const checkKTPInput = value => /^$|^[0-9]{1,16}$/.test(value);

const checkPasswordLimit = value => /^.{8,30}$/.test(value);

const checkPasswordNumber = value => /(?=.*?[0-9]{1})/.test(value);

const checkPasswordChar = value => /(?=.*?[A-Z]{1})(?=.*?[a-z]{1})/.test(value);

const checkPasswordSpecial = value => /(?=.*?[^a-zA-Z0-9]{1})/.test(value);

const validateInput = (check, value) => {
  if (check && typeof check === "string" && value) {
    let method;
    if (check === "number") method = checkNumber(value);
    else if (check === "name") method = checkName(value);
    else if (check === "nameInput") method = checkNameInput(value);
    else if (check === "email") method = checkEmail(value);
    else if (check === "phone") method = checkPhone(value);
    else if (check === "phoneInput") method = checkPhoneInput(value);
    else if (check === "ktp") method = checkKTP(value);
    else if (check === "ktpInput") method = checkKTPInput(value);
    else if (check === "date") method = checkdate(value);
    else if (check === "passwordLimit") method = checkPasswordLimit(value);
    else if (check === "passwordNumber") method = checkPasswordNumber(value);
    else if (check === "passwordChar") method = checkPasswordChar(value);
    else if (check === "passwordSpecial") method = checkPasswordSpecial(value);
    return method;
  }
  return false;
};

export default validateInput;
