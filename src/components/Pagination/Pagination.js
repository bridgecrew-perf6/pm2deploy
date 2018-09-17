import React from 'react';
import PaginationButton from './PaginationButton';
import './Pagination.css';
import Tooltip from '../Tooltip/Tooltip'

const Pagination = (props) => {
  const generatePagination = (c, m) => {
    let current = c,
      last = m,
      delta = 1,
      left = current - delta,
      right = current + delta + 1,
      range = [],
      rangeWithDots = [],
      l,
      paginationNumber = [];

    // Prev
    paginationNumber.push(
      <li key={paginationNumber.length}>
        <PaginationButton text="" icon="arrow-left" background="nav" onClick={prevPage} disabled={current == 1 ? true : false} />
      </li>
    );

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= left && i < right)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          let x = l + 1
          rangeWithDots.push(x);
          paginationNumber.push(
            <li key={paginationNumber.length}>
              <PaginationButton text={x.toString()} onClick={() => clickPage(x)} />
            </li>
          );
        } else if (i - l !== 1) {
          let misc;
          if (i < current) {
            let tooltip = <Tooltip>Previous 5 Pages</Tooltip>
            misc = 
              <li key={paginationNumber.length}>
                <PaginationButton text="" icon="more" background="misc" tooltip={tooltip} onClick={prevFivePages} />
              </li>
          } else {
            let tooltip = <Tooltip>Next 5 Pages</Tooltip>
            misc = 
              <li key={paginationNumber.length}>
                <PaginationButton text="" icon="more" background="misc" tooltip={tooltip} onClick={nextFivePages} />
              </li>
          }
          rangeWithDots.push('...');
          paginationNumber.push(misc);
        }
      }
      rangeWithDots.push(i);
      paginationNumber.push(
        <li key={paginationNumber.length}>
          <PaginationButton text={i.toString()} active={current == i ? true : false} onClick={() => clickPage(i)} />
        </li>
      );
      l = i;
    }

    // Next
    paginationNumber.push(
      <li key={paginationNumber.length}>
        <PaginationButton text="" icon="arrow-right" background="nav" onClick={nextPage} disabled={current == last ? true : false} />
      </li>
    );

    return paginationNumber;
  }

  const clickPage = (i) => {
    props.onClick(i)
  }

  const prevPage = () => {
    const { currentPage } = props;
    if (currentPage > 1) {
      props.onClick(currentPage * 1 - 1);
    }
  }

  const nextPage = () => {
    const { currentPage, totalPage } = props;
    if (currentPage < totalPage) {
      props.onClick(currentPage * 1 + 1);
    }
  }

  const prevFivePages = () => {
    const { currentPage } = props;
    const x = currentPage - 5 || 1;
    props.onClick(x);
  }
  
  const nextFivePages = () => {
    const { currentPage, totalPage } = props;
    let x = currentPage + 5;
    x = x > totalPage ? totalPage : x
    props.onClick(x);
  }
  
  const renderPagination = () => {
    const { currentPage, totalPage } = props;
    const generatedPagination = generatePagination(currentPage, totalPage);
    const pagination = 
      <ul className="pagination">
        {generatedPagination.map((data) => data)}
      </ul>;

    return pagination;
  }

  return (
    renderPagination()
  );
}

Pagination.defaultProps = {
  type: "default"
}

export default Pagination;