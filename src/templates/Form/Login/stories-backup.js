import React from "react";
import { storiesOf } from "@storybook/react";
import { Meta, Story, Props } from "@storybook/addon-docs/blocks";
import {} from "mdx.macro";
import { importMDX } from "mdx.macro";
import { action } from "@storybook/addon-actions";
import LoginView from "./LoginView";
import notes from "./notesLoginForm.md";

const Content = () => React.lazy(() => importMDX("./LoginStorybook.mdx"));

// export default {
//   title: "Form",
//   id: "Login",
//   component: LoginView
// };

// export const Login = () => <LoginView onSubmit={action("eventSubmit")} />;

// const Element = () => {
//   const act = values => {
//     console.log("eventSubmitted", values);
//     return { data: { status: "200", message: "Success" }, error: {} };
//   };

//   return <LoginView onSubmit={action("onSubmitted", act)} />;
// };

storiesOf("Form", module).add("Login", () => <Content />, {
  notes
});
