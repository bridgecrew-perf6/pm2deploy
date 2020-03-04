import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChangeEmailView from "./ChangeEmailView";
import notes from "./notesChangeEmail.md";

const act = values => console.log("form data", values);

storiesOf("Form", module).add(
  "Change Email",
  () => <ChangeEmailView onSubmit={action("eventSubmitted", act)} />,
  {
    notes
  }
);
