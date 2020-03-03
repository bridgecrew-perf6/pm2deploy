/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import TncFormView from "./TncFormView";

class TncFormInfo extends React.Component {
  state = {};

  errMessage = () => ({ tncEmpty: "Ya setujuin lah TnC nya buset" });

  render() {
    return (
      <HomeSection title="TNC Form">
        <hr />
        <div className="flex-content">
          <div>
            Props
            <br />
            <ul>
              <li>onSubmit</li>
              <li>onSuccess</li>
              <li>onError</li>
              <li>Text</li>
            </ul>
          </div>
          <div style={{ maxWidth: "400px" }}>
            <TncFormView message={this.errMessage()} />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default TncFormInfo;
