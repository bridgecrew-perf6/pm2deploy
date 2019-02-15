import { withFormik } from "formik";

const SimpleLogin = withFormik({
  mapPropsToValues: ({ email = "", password = "" }) => ({
    email,
    password
  }),

  validate: (values, props) => props.validate(values, props),
  handleSubmit: async (
    values,
    {
      setSubmitting,
      setStatus,
      setError,
      props: { loginControl, onSuccess, onError }
    }
  ) => {
    const { data, error } = await loginControl({
      email: values.email,
      password: values.password
    });

    if (error) {
      onError(error);
      setSubmitting(false);
    } else {
      onSuccess(data);
      setSubmitting(false);
    }
  },
  displayName: "SimpleLogin"
});

export default SimpleLogin;
