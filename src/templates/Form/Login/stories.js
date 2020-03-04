import React from "react";
import { action } from "@storybook/addon-actions";
import LoginView from "./LoginView";

export default {
  title: "Form Login Test",
  component: LoginView,
  includeStories: [] // or don't load this file at all
};

export const basic = () => <LoginView onSubmit={action("eventSubmit")} />;

basic.story = {
  parameters: { foo: "bar" }
};
