import React from "react";
import selectDateFormik from "./selectDateFormik";
import { getDate, getMonth, getYear } from "./selectDateHelper";
import Style from "./SelectDate.module.scss";

const SelectPart = ({ type, whenChange, ...props }) => {
  let option = getMonth();

  if (type === "year") option = getYear(props);
  else if (type === "date") option = getDate(props);

  const optionList = option.map(({ value, label }) => (
    <option value={value} key={value} disabled={value === "0" || value === 0}>
      {label}
    </option>
  ));

  return (
    <div className="selectDropdown">
      <select onChange={whenChange} defaultValue="0">
        {optionList}
      </select>
    </div>
  );
};

class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const { values, onChange } = this.props;
    const { values: prevValues } = prevProps;

    const valueChange = values !== prevValues;
    const hasOnChange = onChange && typeof (onChange === "function");
    if (valueChange && hasOnChange) onChange(values);
  }

  changeValue = (field, value) => {
    const { setFieldValue } = this.props;
    let ret = value;
    const numVal = parseInt(value, 10);
    if (field === "date" && numVal < 10) ret = `0${value}`;
    else if (field === "month" && numVal < 10) ret = `0${value}`;
    setFieldValue(field, ret);
  };

  dateChange = ({ target }) => this.changeValue("date", target.value);

  monthChange = ({ target }) => this.changeValue("month", target.value);

  yearChange = ({ target }) => this.changeValue("year", target.value);

  render() {
    const { error, label, noDate, noTitle } = this.props;
    return (
      <fieldset>
        {!noTitle && <div className="form__label">{label}</div>}
        <div className={`${Style.SelectDate} ${noDate ? Style.noDate : ""}`}>
          {!noDate && (
            <SelectPart
              type="date"
              whenChange={this.dateChange}
              {...this.props}
            />
          )}
          <SelectPart
            type="month"
            whenChange={this.monthChange}
            {...this.props}
          />
          <SelectPart
            type="year"
            whenChange={this.yearChange}
            {...this.props}
          />
        </div>
        {error && <div>{error}</div>}
      </fieldset>
    );
  }
}

SelectDate.defaultProps = {
  label: "TANGGAL LAHIR",
};

export default selectDateFormik(SelectDate);
