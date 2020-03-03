/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import DeleteAccountView from "./DeleteAccountView";
import HomeSection from "../../../pages/Home/HomeSection";

class DeleteAccountInfo extends React.Component {
  state = {};

  onSubmit = async values => {
    console.log("SUBMITTED", values);
    return setTimeout(() => ({ data: { status: "DUMMY" }, error: {} }), 2000);
  };

  onSuccess = data => console.log("SUCCESS", data);

  onError = err => console.log("ERROR", err);

  render() {
    return (
      <HomeSection title="Delete Account">
        <div>
          <div className="flex-content">
            <div>
              Has 3 Props
              <ul>
                <li>
                  <p>
                    <b>onSubmit</b>
                    <br />
                    Submit handle in form
                    <br />
                    Default: Send API delete account
                  </p>
                </li>
                <li>
                  <p>
                    <b>onSuccess</b>
                    <br />
                    Event handle when API success
                    <br />
                    Default: console.log()
                  </p>
                </li>
                <li>
                  <p>
                    <b>onError</b>
                    <br />
                    Event handle when API failure / error
                    <br />
                    Default: console.log()
                  </p>
                </li>
              </ul>
              <br />
              Tip:
              <ul>
                <li>Disabled email input when logged in</li>
              </ul>
            </div>
            <div className="form">
              <h3>View</h3>
              <DeleteAccountView
                onSubmit={this.onSubmit}
                onSuccess={this.onSuccess}
                onError={this.onError}
              />
              <br />
            </div>
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default DeleteAccountInfo;
