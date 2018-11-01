import React from "react";
import { storiesOf } from "@storybook/react";

import Tooltip from "./index";

storiesOf("Tooltip", module).add("default", () => (
  <Tooltip content="With A Tooltip">
    <button>Dashboard</button>
  </Tooltip>
));
