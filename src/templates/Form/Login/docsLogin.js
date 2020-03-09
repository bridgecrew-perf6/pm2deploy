import React from "react";
import { Meta, Story, Props } from "@storybook/addon-docs/dist/blocks";
import LoginView from "./LoginView";

const docs = () => (
  <>
    <Meta title="Demo/Login" component={LoginView} />
    <Props of={LoginView} />
    <Story>
      <LoginView />
    </Story>
    #Badge
  </>
);

export default docs;
