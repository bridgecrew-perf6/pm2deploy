import React from "react";
import PropTypes from "prop-types";

const paginationSimpleLogic = (
  current,
  last,
  indicatorComponent,
  prevArrowButton,
  nextArrowButton
) => {
  const pageElement = [];
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

  pageElement.push({
    key: "indicator",
    el: indicatorComponent(current, last)
  });

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
  indicatorComponent,
  prevArrowButton,
  nextArrowButton
}) => {
  let current = 1;
  if (currentPage > 0) current = currentPage;

  return (
    <>
      {paginationSimpleLogic(
        current,
        totalPage,
        indicatorComponent,
        prevArrowButton,
        nextArrowButton
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
