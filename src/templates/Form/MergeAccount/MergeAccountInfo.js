/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import HomeSection from "../../../pages/Home/HomeSection";
import MergeAccountView from "./MergeAccountView";

class MergeAccountInfo extends React.Component {
  state = {};

  onSubmit = value => {
    console.log("Submitted", value);
    return {
      data: { status: 200, message: "Message" },
      error: { code: 400, message: "Error" }
    };
  };

  onSuccess = data => console.log("Success", data);

  onError = error => console.log("Error", error);

  errMessage = () => {
    const email = { emailEmpty: "Isi email lo!" };
    const password = { passwordEmpty: "Password gaboleh kosong boss" };
    return { ...email, ...password };
  };

  render() {
    return (
      <HomeSection title="Merge Account">
        <hr />
        <div className="flex-content">
          <div>Props</div>
          <div>
            <p>View</p>
            <MergeAccountView
              onSubmit={this.onSubmit}
              onSuccess={this.onSuccess}
              onError={this.onError}
              message={this.errMessage()}
            />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default MergeAccountInfo;
