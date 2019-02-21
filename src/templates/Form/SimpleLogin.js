import { withFormik } from "formik";
import PropTypes from "prop-types";

const defaultMessage = {
  loginEmailRequired: "E-mail Must Be Filled",
  loginEmailFormat: "Wrong email format",
  loginPasswordRequired: "Must be filled",
  loginCaptchaEmpty: "Captcha must be filled"
};

const SimpleLoginLogic = withFormik({
  mapPropsToValues: ({ email = "", password = "" }) => ({
    email,
    password
  }),

  validate: (values, props) => {
    if (props.validate === "function") return props.validate(values);

    const errorMessage = { ...defaultMessage, ...props.errorMessage };
    const errors = {};

    if (!values.email) errors.email = errorMessage.loginEmailRequired;
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = errorMessage.loginEmailFormat;

    if (!values.password) errors.password = errorMessage.loginPasswordRequired;

    if (!props.enableRecaptcha && values["g-recaptcha"])
      errors.captcha = errorMessage.loginPasswordRequired;

    return errors;
  },

  handleSubmit: async (
    values,
    { setSubmitting, setStatus, props: { loginControl, onSuccess, onError } }
  ) => {
    // Set the status to empty
    setStatus({});

    const { data, error } = await loginControl({
      email: values.email,
      password: values.password
    });

    if (error) {
      onError(error);
      // Set the status to show error
      setStatus(error);
      setSubmitting(false);
    } else {
      // Set the status to empty
      onSuccess(data);
      // Set the status to show error
      setStatus(error);
      setSubmitting(false);
    }
  }
});

SimpleLoginLogic.propTypes = {
  validate: PropTypes.func,
  enableRecaptcha: PropTypes.bool,
  loginControl: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired
};

export default SimpleLoginLogic;
