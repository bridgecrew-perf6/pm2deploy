import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ActivateAccountView from "./ActivateAccountView";

import notes from "./notesActivateAccount.md";

const act = values => console.log("submitted", values);

storiesOf("Form", module).add(
  "Activate Account",
  () => <ActivateAccountView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
