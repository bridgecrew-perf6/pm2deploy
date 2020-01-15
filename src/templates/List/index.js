import React from "react";
import { Machine, actions } from "xstate";
import { interpret } from "xstate/lib/interpreter";
import Pagination from "../Pagination";

const { send } = actions;

const listMachine = Machine(
  {
    id: "list",
    key: "list",
    initial: "idle",
    states: {
      idle: {
        on: {
          LOAD_DATA: "load"
        }
      },
      load: {
        onEntry: ["retrieveData", "loggerAction"],
        on: {
          LOAD_SUCCESS: "show",
          LOAD_FAILED: "error"
        }
      },
      show: {
        on: {
          SEARCH: "load",
          CHANGE_PAGE: "load"
        }
      },
      error: {}
    }
  },
  {
    actions: {
      retrieveData: () => {
        console.log("retrieving");
        send("LOAD_SUCCESS", {
          to: "list",
          delay: 1000
        });
        // send({ type: "LOAD_SUCCESS" });
      }
    }
  }
);

class List extends React.Component {
  state = {
    current: listMachine.initialState,
    currentPage: -1,
    totalPage: 0,
    listData: []
  };

  service = interpret(listMachine).onTransition(current =>
    this.setState({ current })
  );

  componentDidMount() {
    this.service.start();
    this.service.send("LOAD_DATA");
  }

  componentWillUnmount() {
    this.service.stop();
  }

  render() {
    const {
      current: { value },
      currentPage,
      totalPage,
      listData
    } = this.state;

    const { itemComponent } = this.props;

    // if (value === "show")
    return (
      <>
        current state: {value}
        <Pagination
          currentPage={currentPage}
          totalPage={totalPage}
          numberButton={{
            normal: number => <div>{number}</div>,
            active: number => <div className="active">{number}</div>
          }}
          prevArrowButton={{
            normal: () => <div>{"<"}</div>,
            disabled: () => <div>{"dis<"}</div>
          }}
          nextArrowButton={{
            normal: () => <div>{">"}</div>,
            disabled: () => <div>{">dis"}</div>
          }}
          dotComponent={() => <div>...</div>}
        />
      </>
    );
    // const { list, itemComponent, loadingComponent, currentState } = this.props;
    // return <>{listData.map(item => itemComponent(item))}</>;
  }
}

export default List;
