import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ForgotEmailStep1View from "./ForgotEmailStep1View";
import ForgotEmailStep2View from "./ForgotEmailStep2View";

import notesStep1 from "./notesForgotEmailStep1.md";
import notesStep2 from "./notesForgotEmailStep2.md";

const act = values => console.log("form data", values);

storiesOf("Form Forgot Email", module)
  .add(
    "Step1",
    () => <ForgotEmailStep1View onSubmit={action("eventSubmit", act)} />,
    { notes: notesStep1 }
  )
  .add(
    "Step2",
    () => <ForgotEmailStep2View onSubmit={action("eventSubmit", act)} />,
    { notes: notesStep2 }
  );