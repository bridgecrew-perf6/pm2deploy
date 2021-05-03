import React from "react";
import { storiesOf } from "@storybook/react";

import useMousePosition from "./index";

const MousePosition = () => {
  const { x, y } = useMousePosition();
  return <div>{`${x}, ${y}`}</div>;
};

storiesOf("Custom Hooks", module).add("Mouse Position", () => (
  <MousePosition />
));
