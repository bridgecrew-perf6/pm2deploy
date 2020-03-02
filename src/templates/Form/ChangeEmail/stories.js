import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ChangeEmailView from "./ChangeEmailView";
import notes from "./notesChangeEmail.md";

const act = values => console.log("form data", values);

storiesOf("Form Change Email", module).add(
  "default",
  () => <ChangeEmailView onSubmit={action("eventSubmitted", act)} />,
  {
    notes
  }
);
