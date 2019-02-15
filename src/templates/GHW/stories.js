import React from "react";
import { storiesOf } from "@storybook/react";

import GHW from "./index";

storiesOf("GHW", module)
  .add("default", () => <GHW />)
  .add("secondary", () => <GHW secondaryStyle />);
