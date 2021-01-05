import React from "react";
import { storiesOf } from "@storybook/react";

import useDeviceOrientation from "./index";

const DeviceOrientation = () => {
  const { absolute, alpha, beta, gamma } = useDeviceOrientation();
  return (
    <div>{`absolute: ${absolute}, alpha: ${alpha}, beta: ${beta}, gamma: ${gamma}`}</div>
  );
};

storiesOf("Custom Hooks", module).add("Device Orientation", () => (
  <DeviceOrientation />
));
