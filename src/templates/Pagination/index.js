import React from "react";
import PropTypes from "prop-types";

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
  const pageElement = [];
  let l = 0;

  for (let i = 1; i <= last; i += 1) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  if (current > 1)
    pageElement.push({
      key: "prev",
      el: prevArrowButton.normal()
    });
  else
    pageElement.push({
      key: "prev",
      el: prevArrowButton.disabled()
    });

  for (let i = 0; i < range.length; i += 1) {
    if (l) {
      if (range[i] - l === 2)
        pageElement.push({
          key: `dots${range[i]}`,
          el: dotComponent()
        });
      else if (range[i] - l !== 1)
        pageElement.push({
          key: `dot${range[i]}`,
          el: dotComponent()
        });
    }
    if (current === range[i])
      pageElement.push({
        key: range[i],
        el: numberButton.active(range[i])
      });
    else
      pageElement.push({
        key: range[i],
        el: numberButton.normal(range[i])
      });
    l = range[i];
  }

  if (current < last)
    pageElement.push({
      key: "next",
      el: nextArrowButton.normal()
    });
  else
    pageElement.push({
      key: "next",
      el: nextArrowButton.disabled()
    });

  return pageElement;
};

const Pagination = ({
  currentPage,
  totalPage,
  numberButton,
  prevArrowButton,
  nextArrowButton,
  dotComponent
}) => {
  let current = 1;
  if (currentPage > 0) current = currentPage;

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

Pagination.propTypes = {
  /** Current Page */
  currentPage: PropTypes.number,

  /** Total Page */
  totalPage: PropTypes.number,

  /** Function for Number Button */
  numberButton: PropTypes.shape({
    normal: PropTypes.func,
    active: PropTypes.func
  }),

  /** Function for Previous Button */
  prevArrowButton: PropTypes.shape({
    normal: PropTypes.func,
    disabled: PropTypes.func
  }),

  /** Function for Next Button */
  nextArrowButton: PropTypes.shape({
    normal: PropTypes.func,
    disabled: PropTypes.func
  }),

  /** Function for Dot Component */
  dotComponent: PropTypes.func
};

Pagination.defaultProps = {
  currentPage: 1,
  totalPage: 1,
  numberButton: {
    normal: number => <span>{number}</span>,
    active: number => <span className="active">{number}</span>
  },
  prevArrowButton: {
    normal: () => <span>{"<"}</span>,
    disabled: () => <span>{"dis<"}</span>
  },
  nextArrowButton: {
    normal: () => <span>{">"}</span>,
    disabled: () => <span>{">dis"}</span>
  },
  dotComponent: () => <span>...</span>
};

export default Pagination;
