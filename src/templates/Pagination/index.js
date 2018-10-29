import React from "react";
// import PropType from "prop-types";

const paginationNumberLogic = (
  current,
  last,
  numberButton,
  prevArrowButton,
  nextArrowButton,
  dotComponent
) => {
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let l = 0;

  for (let i = 1; i <= last; i += 1) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  if (current > 1)
    rangeWithDots.push({
      key: "prev",
      el: prevArrowButton.normal()
    });
  else
    rangeWithDots.push({
      key: "prev",
      el: prevArrowButton.disabled()
    });

  for (let i = 0; i < range.length; i += 1) {
    if (l) {
      if (range[i] - l === 2)
        rangeWithDots.push({
          key: `dots${range[i]}`,
          el: dotComponent()
        });
      else if (range[i] - l !== 1)
        rangeWithDots.push({
          key: `dot${range[i]}`,
          el: dotComponent()
        });
    }
    if (current === range[i])
      rangeWithDots.push({
        key: range[i],
        el: numberButton.active(range[i])
      });
    else
      rangeWithDots.push({
        key: range[i],
        el: numberButton.normal(range[i])
      });
    l = range[i];
  }

  if (current < last)
    rangeWithDots.push({
      key: "next",
      el: nextArrowButton.normal()
    });
  else
    rangeWithDots.push({
      key: "next",
      el: nextArrowButton.disabled()
    });

  return rangeWithDots;
};

const Pagination = ({
  currentPage,
  totalPage,
  numberButton,
  prevArrowButton,
  nextArrowButton,
  dotComponent
}) => {
  let current = 0;
  if (typeof currentPage === "number" && currentPage > 0) current = currentPage;

  return (
    <>
      {paginationNumberLogic(
        current,
        totalPage,
        numberButton,
        prevArrowButton,
        nextArrowButton,
        dotComponent
      ).map(item => (
        <React.Fragment key={item.key}>{item.el}</React.Fragment>
      ))}
    </>
  );
};

// Pagination.PropType;

export default Pagination;
