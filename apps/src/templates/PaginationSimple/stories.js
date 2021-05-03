import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PaginationSimple from "./index";

storiesOf("PaginationSimple", module).add("default", () => (
  <PaginationSimple
    currentPage={2}
    totalPage={20}
    indicatorComponent={(current, total) => (
      <span>
        {current}
        of
        {total}
      </span>
    )}
    prevArrowButton={{
      normal: () => <button onClick={action(`prev`)}>{"<"}</button>,
      disabled: () => <button disabled>{"<"}</button>
    }}
    nextArrowButton={{
      normal: () => <button onClick={action(`next`)}>{">"}</button>,
      disabled: () => <button disabled>{">"}</button>
    }}
  />
));
