import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import ForgotPasswordView from "./ForgotPasswordView";
import notes from "./notesForgotPassword.md";

const act = values => console.log("Submitted Value", values);

storiesOf("Form/Forgot Password", module).add(
  "View",
  () => <ForgotPasswordView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
