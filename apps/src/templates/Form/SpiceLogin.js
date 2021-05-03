import { withFormik } from "formik";

const LoginForm = withFormik({
  mapPropsToValues: () => ({
    title: "",
    user_email: "",
    user_password: ""
  }),

  validate: values => {
    const errors = {};

    if (!values.user_email) {
      errors.user_email = "E-mail lo harus diisi";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.user_email)
    ) {
      errors.user_email = "Format e-mail salah";
    }

    const passValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;
    if (!values.user_password) {
      errors.user_password = "Kata sandi lo harus diisi";
    } else if (!passValid.test(values.user_password)) {
      errors.user_password = "Format kata sandi salah";
    }

    return errors;
  },

  handleSubmit: async (
    values,
    { setSubmitting, setStatus, setValues, props }
  ) => {
    const login = await authLogin({
      email: values.user_email,
      password: values.user_password
    });

    if (!login.data.message) {
      setStatus(login.error.message);
      setSubmitting(false);
    } else if (login.data.code === 202) {
      setValues({
        ...values,
        account: login.data.login,
        password: values.user_password,
        merge: true
      });
      setSubmitting(false);
    } else {
      Cookies.set("islogin", "1");
      props.history.push("/");
    }
  },

  displayName: "LoginForm"
});

export default LoginForm;
