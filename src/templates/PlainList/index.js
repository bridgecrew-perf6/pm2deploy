import React from "react";
// import { Machine } from "xstate";
import { connect } from "react-redux";
import { getItems } from "./Actions";

// const listMachine = Machine({
//   key: "light",
//   initial: "idle",
//   states: {
//     idle: {
//       on: {
//         LOAD_DATA: "load"
//       }
//     },
//     load: {
//       onEntry: "Load Data",
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

// const nextState = listMachine.transition(currentState, "LOAD_DATA").value;

class PlainList extends React.Component {
  componentDidMount() {
    const { dataSource, storeKey, retrieveData } = this.props;
    retrieveData(dataSource, storeKey);
  }

  handleClick = () => console.log("asd");

  render() {
    const { list, itemComponent, loadingComponent, currentState } = this.props;

    return (
      <>
        {(() => {
          if (currentState === "idle") {
            return loadingComponent();
          }
          return <span />;
        })()}
        {list.map(item => itemComponent(item))}
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({
  list: state.plain_list[props.storeKey]
    ? state.plain_list[props.storeKey].data
    : [],
  currentState: state.plain_list[props.storeKey]
    ? state.plain_list[props.storeKey].currentState
    : "idle"
});

const mapDispatchToProps = dispatch => ({
  retrieveData: (dataSource, storeKey) => {
    dispatch(getItems(dataSource, storeKey));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlainList);
