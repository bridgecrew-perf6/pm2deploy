/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import EditProfileView from "./EditProfileView";
import HomeSection from "../../../pages/Home/HomeSection";

class EditProfileInfo extends React.Component {
  state = {
    profileData: false
  };

  componentDidMount() {
    setTimeout(() => this.setProfileData(), 1500);
  }

  setProfileData = () =>
    this.setState({
      profileData: {
        name: "Jojo",
        email: "jojo@ri.ch",
        ktp: "3216062804950021",
        phone: "081807315977",
        city: "14",
        address: "Jl. Ninjaku, Gg. Buntu. RT -1 RW -1000",
        favBrand1: "2",
        favBrand2: "4",
        emailPromo: true,
        interest: ["style", "visual art"]
      }
    });

  render() {
    const { profileData } = this.state;
    return (
      <HomeSection title="Edit Profile">
        <hr />
        <div className="flex-content">
          <div>Props</div>
          <div>
            <EditProfileView profileData={profileData} />
          </div>
        </div>
      </HomeSection>
    );
  }
}

export default EditProfileInfo;
