/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import RegisterView from "./RegisterView";

class RegisterInfo extends React.Component {
  state = {};

  render() {
    return (
      <HomeSection title="Register">
        <hr />
        <div className="flex-content">
          <div>Props</div>
          <div>
            <RegisterView />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default RegisterInfo;
