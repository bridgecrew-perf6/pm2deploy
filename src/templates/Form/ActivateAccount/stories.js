import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ActivateAccountView from "./ActivateAccountView";

import notes from "./notesActivateAccount.md";

const stories = storiesOf("Form/Activate Account", module);

// storiesOf("Form", module).add(
//   "Activate Account",
//   () => <ActivateAccountView onSubmit={action("eventSubmit", act)} />,
//   { notes }
// );
stories.add(
  "View",
  () => <ActivateAccountView onSubmit={action("submitted")} />,
  {
    notes
  }
);
