/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import ForgotEmailForm from "./ForgotEmailForm";

class ForgotEmailInfo extends React.Component {
  state = {};

  render() {
    return (
      <HomeSection title="Forgot Email">
        <hr />
        <div className="flex-content">
          <div>Has 2 Props in nested</div>
          <div>
            <h3>View</h3>
            <ForgotEmailForm />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default ForgotEmailInfo;
