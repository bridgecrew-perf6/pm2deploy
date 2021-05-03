import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Pagination from "./index";

storiesOf("Pagination", module).add("default", () => (
  <Pagination
    currentPage={2}
    totalPage={20}
    numberButton={{
      normal: number => (
        <button onClick={action(`numberPressed ${number}`)}>{number}</button>
      ),
      active: number => (
        <button onClick={action(`numberPressed ${number}`)} className="active">
          {number}
        </button>
      )
    }}
    prevArrowButton={{
      normal: () => <button onClick={action(`prev`)}>{"<"}</button>,
      disabled: () => <button disabled>{"<"}</button>
    }}
    nextArrowButton={{
      normal: () => <button onClick={action(`next`)}>{">"}</button>,
      disabled: () => <button disabled>{">"}</button>
    }}
    dotComponent={() => <button>...</button>}
  />
));
