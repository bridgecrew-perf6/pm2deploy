import React from "react";
import { storiesOf } from "@storybook/react";
import LoginView from "./LoginView";

storiesOf("Login Form", module).add("default", () => (
  <div>
    <div className="box info">
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
      <LoginView />
    </div>
  </div>
));
