import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LoginView from "./LoginView";

import markdown from "./loginFormMarkdown.md";

const Element = () => {
  const act = values => {
    console.log("onSubmitEvent", values);
    return { data: { status: "200", message: "Success" }, error: {} };
  };

  return <LoginView onSubmit={action("onSubmitted", act)} />;
};

storiesOf("Login Form", module).add("default", () => <Element />, {
  notes: markdown
});
