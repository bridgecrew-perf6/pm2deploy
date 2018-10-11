// import React from "react";
// import { Machine } from "xstate";

// const listMachine = Machine({
//   key: "light",
//   initial: "green",
//   states: {
//     idle: {
//       on: {
//         LOAD_DATA: "load"
//       }
//     },
//     load: {
//       on: {
//         SUCCESS: "show",
//         FAILED: "error"
//       }
//     },
//     show: {
//       on: {
//         SEARCH: "load",
//         CHANGE_PAGE: "load",
//         LOAD_MORE: "load"
//       }
//     },
//     error: {}
//   }
// });

// // const currentState = "green";
// // const nextState = listMachine.transition(currentState, "TIMER").value;

// class List extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <div />;
//   }
// }

// export default List;
