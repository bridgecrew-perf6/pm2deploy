import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import MergeAccountView from "./MergeAccountView";
import notes from "./notesMergeAccount.md";

const act = values => console.log("Submitted", values);

storiesOf("Form", module).add(
  "Merge Account",
  () => <MergeAccountView onSubmit={action("eventSubmit", act)} />,
  { notes }
);
