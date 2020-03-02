/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import ChangeEmailView from "./ChangeEmailView";

class ChangeEmailInfo extends React.Component {
  state = {};

  render() {
    return (
      <HomeSection title="Change Email">
        <hr />
        <div className="flex-content">
          <div>
            <p>Props</p>
            <ul>
              <li>onSubmit</li>
              <li>onSuccess</li>
              <li>onError</li>
            </ul>
          </div>
          <div>
            <ChangeEmailView />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default ChangeEmailInfo;
