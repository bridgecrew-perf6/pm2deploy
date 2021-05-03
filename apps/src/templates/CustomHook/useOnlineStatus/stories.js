import React from "react";
import { storiesOf } from "@storybook/react";

import useOnlineStatus from "./index";

const OnlineStatus = () => {
  const onlineStatus = useOnlineStatus({
    onOnline: () => {
      console.log("I'm Online");
    },
    onOffline: () => {
      console.log("I'm Offline");
    }
  });
  return <div>{` ${onlineStatus}`}</div>;
};

storiesOf("Custom Hooks", module).add("Online Status", () => <OnlineStatus />);
