import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import RegisterView from "./RegisterView";

import notes from "./notesRegister.md";

const act = values => console.log("submitted", values);

storiesOf("Form", module).add(
  "Register",
  () => <RegisterView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
