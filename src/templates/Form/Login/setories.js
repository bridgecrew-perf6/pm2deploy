import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LoginView from "./LoginView";

import notes from "./notesLoginForm.md";

const Element = () => {
  const act = values => {
    console.log("eventSubmitted", values);
    return { data: { status: "200", message: "Success" }, error: {} };
  };

  return <LoginView onSubmit={action("onSubmitted", act)} />;
};

storiesOf("Form Login", module).add("default", () => <Element />, {
  notes
});
