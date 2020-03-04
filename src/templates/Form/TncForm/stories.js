import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import TncFormView from "./TncFormView";
import notes from "./notesTncForm.md";

const act = values => console.log("Submitted", values);

storiesOf("Form", module).add(
  "TNC",
  () => <TncFormView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
