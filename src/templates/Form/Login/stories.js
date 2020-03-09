import React from "react";
// import { Meta, Story, Props, Preview } from "@storybook/addon-docs/dist/blocks";
import { storiesOf } from "@storybook/react";
import {} from "@storybook/addon-docs/blocks";
import { action } from "@storybook/addon-actions";
import LoginView from "./LoginView";

import notes from "./notesLoginForm.md";
import docs from "./docsLogin";
// import docs from "./docs.stories.mdx";

const element = <LoginView onSubmit={action("eventSubmit")} />;

// storiesOf("Form", module).add("Login", () => element, { notes, docs });

export default {
  title: "Form",
  component: LoginView
};

export const Login = () => element;

Login.story = {
  name: "Login",
  parameters: {
    notes,
    docs
  }
};
