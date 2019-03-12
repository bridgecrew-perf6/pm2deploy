import React from "react";
import { withFormik } from "formik";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";

const defaultMessage = {
  loginEmailRequired: "E-mail Must Be Filled",
  loginEmailFormat: "Wrong email format",
  loginPasswordRequired: "Must be filled",
  loginCaptchaEmpty: "Captcha must be filled"
};

const withSimpleLogin = withFormik({
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

    // if (!props.enableRecaptcha && !values["g-recaptcha"])
    //   errors.captcha = errorMessage.loginPasswordRequired;

    return errors;
  },

  handleSubmit: async (
    values,
    {
      setSubmitting,
      setStatus,
      props: { loginControl, onSuccess, onError, onErrorJS }
    }
  ) => {
    // Set the status to empty
    setStatus({});

    const formData = {
      email: values.email,
      password: values.password,
      "g-recaptcha": values["g-recaptcha"]
    };

    const { data, error, errorJS } = await loginControl({ ...formData });

    if (errorJS) {
      onErrorJS(errorJS);
    } else if (error) {
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

withSimpleLogin.propTypes = {
  validate: PropTypes.func,
  enableRecaptcha: PropTypes.bool,
  loginControl: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onErrorJS: PropTypes.func.isRequired
};

export const withRecaptcha = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.recaptchaRef = React.createRef();
    }

    render() {
      const { handleSubmit, setFieldValue } = this.props;
      const newProps = {
        ...this.props,
        handleSubmit: e => {
          e.preventDefault();
          this.recaptchaRef.current.execute();
          handleSubmit(e);
        }
      };

      return (
        <>
          <WrappedComponent {...newProps} enableRecaptcha />
          <ReCAPTCHA
            ref={this.recaptchaRef}
            sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY}
            size="invisible"
            onChange={value => {
              setFieldValue("g-recaptcha", value);
            }}
          />
        </>
      );
    }
  };

export default withSimpleLogin;
