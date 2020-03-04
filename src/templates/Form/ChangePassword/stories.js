import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChangePasswordView from "./ChangePasswordView";
import notes from "./notesChangePassword.md";

const act = values => console.log("form data", values);

storiesOf("Form", module).add(
  "Change Password",
  () => <ChangePasswordView onSubmit={action("eventSubmitted", act)} />,
  { notes }
);
