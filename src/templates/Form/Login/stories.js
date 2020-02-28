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

  return (
    <div>
      <div className="box">
        <h2>How to use</h2>
        <ul>
          <li>
            Call the login form like this:&nbsp;
            <b>{`LoginForm(<ViewComponent />)`}</b>
          </li>
        </ul>
      </div>
      <div className="box info">
        <h2>Props:</h2>
        <ul>
          <li>onSubmit</li>
          <li>onSuccess</li>
          <li>onError</li>
        </ul>
      </div>
      <div className="box">
        <h2>View</h2>
        <LoginView onSubmit={action("onSubmitted", act)} />
      </div>
    </div>
  );
};

storiesOf("Login Form", module).add("default", () => <Element />, {
  notes: markdown
});
