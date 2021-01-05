const monthList = [
  { id: 0, name: "Bulan" },
  { id: 1, name: "Januari" },
  { id: 2, name: "Februari" },
  { id: 3, name: "Maret" },
  { id: 4, name: "April" },
  { id: 5, name: "Mei" },
  { id: 6, name: "Juni" },
  { id: 7, name: "Juli" },
  { id: 8, name: "Agustus" },
  { id: 9, name: "September" },
  { id: 10, name: "Oktober" },
  { id: 11, name: "November" },
  { id: 12, name: "Desember" },
];

const getMonth = () =>
  monthList.map((item) => {
    const option = {};
    option.value = item.id;
    option.label = item.name;
    return option;
  });

const isLeapYear = (props) => {
  const { values } = props;
  const { year } = values;

  const div400 = year % 400 === 0;
  const div100 = year % 100 === 0;
  const div4 = year % 4 === 0;

  let isLeap = false;

  if (div400) isLeap = true;
  else if (!div400 && div100) isLeap = false;
  else if (!div400 && !div100 && div4) isLeap = true;

  return isLeap;
};

const doChange = (props) => {
  const { onChange, values } = props;
  const { date, month, year } = values;
  const join = `${date} ${month} ${year}`;
  onChange(join);
};

const getMaxDate = (props) => {
  const { values, setFieldValue } = props;
  const { month, date } = values;

  const checkMonth = month === 2 || month === "2";
  const checkDate = date > 29;

  const maxDate = isLeapYear(props) ? 29 : 28;
  const diffDate = date - maxDate;

  const doMin = () => {
    if (checkDate) setFieldValue("date", diffDate);
    return maxDate;
  };

  if (checkMonth) return doMin();
  return 31;
};

const getDate = (props) => {
  let i = 1;
  const maxD = getMaxDate(props);
  const date = [{ value: "0", label: "Tanggal" }];
  for (i; i <= maxD; i++) {
    const option = {};
    option.value = i.toString();
    option.label = i.toString();
    date.push(option);
  }
  return date;
};

const getYear = (props) => {
  const { values } = props;
  const { maxYear, minYear } = values;
  let i = minYear;
  const years = [{ value: 0, label: "Tahun" }];
  for (i = maxYear; i >= minYear; i -= 1) {
    const option = {};
    option.value = i.toString();
    option.label = i.toString();
    years.push(option);
  }
  return years;
};

export { getYear, getDate, doChange, getMonth };
