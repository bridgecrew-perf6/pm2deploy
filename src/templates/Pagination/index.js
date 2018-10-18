// import React from "react";

// const Pagination = props => {
//   const generatePagination = (c, m, d) => {
//     const current = c * 1;
//     const last = m * 1;
//     const delta = d * 1;
//     const left = current - delta;
//     const right = current + delta + 1;
//     const range = [];
//     const rangeWithDots = [];
//     let l;
//     const paginationNumber = [];

//     // Prev
//     paginationNumber.push(<div />);

//     for (let i = 1; i <= last; i += 1) {
//       if (i === 1 || i === last || (i >= left && i < right)) {
//         range.push(i);
//       }
//     }

//     for (const i of range) {
//       if (l) {
//         if (i - l === 2) {
//           const x = l + 1;
//           rangeWithDots.push(x);
//           paginationNumber.push(<div />);
//         } else if (i - l !== 1) {
//           let misc;
//           if (i < current) {
//             misc = <div />;
//           } else {
//             misc = <div />;
//           }
//           rangeWithDots.push("...");
//           paginationNumber.push(misc);
//         }
//       }
//       rangeWithDots.push(i);
//       paginationNumber.push(<div />);
//       l = i;
//     }

//     // Next
//     paginationNumber.push(<div />);

//     return paginationNumber;
//   };

//   const clickPage = i => {
//     props.onClick(i);
//   };

//   const prevPage = () => {
//     const { currentPage } = props;
//     if (currentPage > 1) {
//       props.onClick(currentPage * 1 - 1);
//     }
//   };

//   const nextPage = () => {
//     const { currentPage, totalPage } = props;
//     if (currentPage < totalPage) {
//       props.onClick(currentPage * 1 + 1);
//     }
//   };

//   const prevFivePages = () => {
//     const { currentPage } = props;
//     const x = currentPage - 5 || 1;
//     props.onClick(x);
//   };

//   const nextFivePages = () => {
//     const { currentPage, totalPage } = props;
//     let x = currentPage + 5;
//     x = x > totalPage ? totalPage : x;
//     props.onClick(x);
//   };

//   const renderPagination = () => {
//     const { currentPage, totalPage, delta } = props;
//     const generatedPagination = generatePagination(
//       currentPage,
//       totalPage,
//       delta
//     );
//     const pagination = (
//       <ul className="pagination">{generatedPagination.map(data => data)}</ul>
//     );

//     return pagination;
//   };

//   return renderPagination();
// };

// Pagination.defaultProps = {
//   currentPage: 1,
//   delta: 1
// };

// export default Pagination;
