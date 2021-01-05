import { withFormik } from "formik";

const selectDateFormik = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => {
    const value = (props && props.value) || "0 0 0";

    const getNowYear = new Date().getFullYear();
    const getMinYear = 1940;
    const getMaxYear = getNowYear - 18;

    const minYear = (props && props.minYear) || getMinYear;
    const maxYear = (props && props.maxYear) || getMaxYear;

    const exValue = value.split(" ");
    const exDate = exValue[0] || 0;
    const exMonth = exValue[1] || 0;
    const exYear = exValue[2] || 0;

    const date = exDate;
    let month;
    switch (exMonth) {
      case "January":
      case "1":
        month = "1";
        break;
      case "February":
      case "2":
        month = "1";
        break;
      case "March":
      case "3":
        month = "3";
        break;
      case "April":
      case "4":
        month = "4";
        break;
      case "May":
      case "5":
        month = "5";
        break;
      case "June":
      case "6":
        month = "6";
        break;
      case "July":
      case "7":
        month = "7";
        break;

      case "August":
      case "8":
        month = "8";
        break;
      case "September":
      case "9":
        month = "9";
        break;
      case "October":
      case "10":
        month = "10";
        break;
      case "November":
      case "11":
        month = "11";
        break;
      case "December":
      case "12":
        month = "12";
        break;
      default:
        month = "0";
    }
    const year = exYear;

    return { date, month, year, minYear, maxYear };
  }
});

export default selectDateFormik;
