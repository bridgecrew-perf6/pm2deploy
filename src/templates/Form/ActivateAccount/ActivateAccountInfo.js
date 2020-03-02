/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import ActivateAccountView from "./ActivateAccountView";

class ActivateAccountInfo extends React.Component {
  state = {};

  submit = values => console.log("SUBMITTED", values);

  action = values => console.log("ACTION", values);

  render() {
    return (
      <HomeSection title="Activate Account">
        <hr />
        <div className="flex-content">
          <div>Props</div>
          <div>
            View
            <br />
            <ActivateAccountView
              onAction={this.action}
              onSubmit={this.submit}
            />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default ActivateAccountInfo;
