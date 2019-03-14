import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const withRecaptcha = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.recaptchaRef = React.createRef();
    }

    render() {
      const {
        validateForm,
        submitForm,
        handleSubmit,
        setFieldValue,
        isValid,
        values
      } = this.props;

      const newProps = {
        ...this.props,
        handleSubmit: e => {
          e.preventDefault();
          validateForm(values);
          submitForm();
          if (isValid) this.recaptchaRef.current.execute();
          // if (values["g-recaptcha"] !== undefined) handleSubmit(e);
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
              handleSubmit();
            }}
          />
        </>
      );
    }
  };

export default withRecaptcha;
