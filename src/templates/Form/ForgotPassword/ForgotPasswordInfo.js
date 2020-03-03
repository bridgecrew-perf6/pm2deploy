/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import ForgotPasswordView from "./ForgotPasswordView";
import HomeSection from "../../../pages/Home/HomeSection";

class ForgotPasswordInfo extends React.Component {
  state = {};

  onSubmit = values => {
    console.log("SUBMITTED", values);
    return { data: { status: "200", message: "Message" }, error: {} };
  };

  onSuccess = data => {
    console.log("SUCCESS", data);
  };

  render() {
    return (
      <HomeSection title="Forgot Password">
        <hr />
        <div className="flex-content">
          <div>Props</div>
          <div>
            <ForgotPasswordView
              onSubmit={this.onSubmit}
              onSuccess={this.onSuccess}
            />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default ForgotPasswordInfo;
