import React from "react";
import { Meta, Story, Props } from "@storybook/addon-docs/blocks";
import { action } from "@storybook/addon-actions";
import LoginView from "./LoginView";

export default {
  title: "Login Form",
  id: "Foo/Bar",
  component: LoginView
};

export const Regular = () => <LoginView onSubmit={action("eventSubmit")} />;
