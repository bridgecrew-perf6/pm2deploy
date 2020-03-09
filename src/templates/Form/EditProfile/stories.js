import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import EditProfileView from "./EditProfileView";

import notes from "./notesEditProfile.md";

const act = values => console.log("submitted", values);

storiesOf("Form/Edit Profile", module).add(
  "View",
  () => <EditProfileView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
