/* eslint linebreak-style: ["error", "windows"] */

import React from "react";
import PropTypes from "prop-types";
import EditProfileForm from "./EditProfileForm";
import Loading from "../../../components/Loading/Loading";
import messageEditProfile from "./messageEditProfile";

const {
  addressEmpty,
  cityEmpty,
  favBrandEmpty,
  favBrandSame,
  interestEmpty,
  phoneEmpty,
  phoneWrongFormat,
  securityAnswerEmpty,
  securityQuestionEmpty
} = messageEditProfile;

const defaultOnSubmit = values => {
  console.log("eventSubmitted", values);
  return { data: { status: 200, message: "success" }, error: {} };
};

const defaultOnSuccess = res => {
  console.log("Success", res);
  return res;
};

const defaultOnError = err => {
  console.log("Error", err);
  return err;
};

const cityOption = [
  { id: "12", name: "Bekasi" },
  { id: "13", name: "Cibitung" },
  { id: "14", name: "Kp. Siluman" },
  { id: "15", name: "Kp. Buwek" },
  { id: "16", name: "Cikarang" }
];

const brandOption = [
  { id: "1", name: "Menthol" },
  { id: "2", name: "Menthal" },
  { id: "3", name: "Menthil" },
  { id: "4", name: "Menthel" },
  { id: "5", name: "Manthoel" },
  { id: "6", name: "Bentoel" }
];

const interestOption = ["style", "music", "taste", "visual art"];

class EditProfileView extends React.Component {
  state = {};

  getAction = () => {
    const { isSubmitting } = this.props;
    if (isSubmitting) return <Loading align="left" />;
    return <button type="submit">Update Profile</button>;
  };

  getOptionCity = () =>
    cityOption.map(({ id, name }) => (
      <option value={id} key={id}>
        {name}
      </option>
    ));

  getOptionBrand = (brandId, brandNum) =>
    brandOption.map(({ id, name }) => {
      let disabled = false;
      if (brandNum === "2" && brandId === id) disabled = true;
      return (
        <option value={id} key={id} disabled={disabled}>
          {name}
        </option>
      );
    });

  changeFavBrand1 = e => {
    const { setFieldValue } = this.props;
    const {
      target: { value }
    } = e;
    setFieldValue("favBrand1", value);
    setFieldValue("favBrand2", false);
    setTimeout(() => setFieldValue("favBrand2", ""), 250);
    // setFieldValue("favBrand2", "noBrand");
  };

  selectBrand = (brandValue, brandNum, onChange) => {
    const { handleChange, values } = this.props;
    const noBrand2 = brandNum !== 2 || brandNum !== "2";
    const optionValue = noBrand2 ? values.favBrand1 : brandValue;
    const num = brandNum.toString();
    return (
      brandValue !== false && (
        <select
          name={`favBrand${brandNum}`}
          onChange={onChange || handleChange}
          defaultValue={brandValue}
        >
          <option value="noBrand">Pilih</option>
          {this.getOptionBrand(optionValue, num)}
        </select>
      )
    );
  };

  itemInterestView = item => {
    const { handleChange } = this.props;
    const name = `interest_${item}`;
    return (
      <div key={item}>
        <label htmlFor={name}>
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={handleChange}
          />
          &nbsp;
          {item}
        </label>
      </div>
    );
  };

  interestCheckView = () =>
    interestOption.map(item => this.itemInterestView(item));

  render() {
    const { handleSubmit, handleChange, touched, errors, values } = this.props;
    const { name, ktp, email, phone, city, address, favBrand1 } = values;
    const { favBrand2, emailPromo } = values;
    return (
      <form onSubmit={handleSubmit}>
        <p>
          Name:
          <br />
          <input value={name} disabled />
          {/* {touched.name && errors.name} */}
        </p>
        <p>
          KTP:
          <br />
          <input value={ktp} disabled />
        </p>
        <p>
          Email:
          <br />
          <input value={email} disabled />
        </p>
        <p>
          Phone:
          <br />
          <input name="phone" value={phone} onChange={handleChange} />
          <br />
          {touched.phone && errors.phone}
        </p>
        <p>
          Kota Tinggal:
          <br />
          {city && (
            <select name="city" onChange={handleChange} defaultValue={city}>
              <option value="">Pilih Kota Tinggal</option>
              {this.getOptionCity(city)}
            </select>
          )}
          {touched.city && errors.city}
        </p>
        <p>
          Alamat lengkap:
          <br />
          <textarea name="address" value={address} onChange={handleChange} />
          <br />
          {touched.address && errors.address}
        </p>
        <p>
          Brand Favorit 1:
          <br />
          {this.selectBrand(favBrand1, 1, this.changeFavBrand1)}
        </p>
        <p>
          Brand Favorit 2:
          <br />
          {this.selectBrand(favBrand2, 2)}
        </p>
        <br />
        {touched.favBrand1 && touched.favBrand2 && errors.favBrand}
        <p>
          <label htmlFor="emailPromo">
            <input
              type="checkbox"
              name="emailPromo"
              onChange={handleChange}
              id="emailPromo"
              checked={emailPromo}
            />
            &nbsp;Terima email promo
          </label>
        </p>
        <p>
          Menarik:
          <br />
          {this.interestCheckView()}
          <br />
          {touched.interest && errors.interest}
        </p>
        {this.getAction()}
        <br />
        <br />
      </form>
    );
  }
}

EditProfileView.defaultProps = {
  onSubmit: defaultOnSubmit,
  onSuccess: defaultOnSuccess,
  onError: defaultOnError,
  profileData: {
    name: "",
    ktp: "",
    email: "",
    dob: "",
    phone: "",
    gender: "",
    city: "",
    address: "",
    securityQuestion: "",
    securityAnswer: "",
    favBrand1: "",
    favBrand2: "",
    interest: "",
    emailPromo: ""
  },
  errorMessage: {
    addressEmpty,
    cityEmpty,
    favBrandEmpty,
    favBrandSame,
    interestEmpty,
    phoneEmpty,
    phoneWrongFormat,
    securityAnswerEmpty,
    securityQuestionEmpty
  }
};

EditProfileView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  profileData: PropTypes.object.isRequired,
  errorMessage: PropTypes.object
};

export default EditProfileForm(EditProfileView);
