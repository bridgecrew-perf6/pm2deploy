import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import DeleteAccountView from "./DeleteAccountView";

import notes from "./notesDeleteAccount.md";

const act = values => console.log("submitted", values);

storiesOf("Form Delete Account", module).add(
  "default",
  () => <DeleteAccountView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
