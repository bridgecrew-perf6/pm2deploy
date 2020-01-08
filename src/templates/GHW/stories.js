import React from "react";
import { storiesOf } from "@storybook/react";

import GHW from "./index";

storiesOf("GHW", module)
  .add("default", () => <GHW />)
  .add("secondary", () => <GHW secondaryStyle />)
  .add("fixed", () => (
    <div>
      <div style={{ background: "salmon", width: "100%", height: "100vh" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis explicabo
        harum, repudiandae saepe tempora modi asperiores facere neque nostrum
        enim minus voluptas cupiditate dignissimos, nesciunt officia soluta nemo
        pariatur itaque sunt aut omnis vero ea perferendis? At consequuntur
        rerum ex voluptatum impedit! Ratione blanditiis quo, voluptate
        reprehenderit voluptatibus aut sint corrupti, eaque placeat magni iste
        hic quasi laborum quibusdam porro! Veniam nihil repudiandae magni eum
        sint laboriosam? Quam blanditiis ratione quasi unde minus, iste, dicta
        aperiam alias hic, laudantium consequuntur maiores quaerat dolorum sequi
        aliquam libero veritatis optio! Fuga ratione molestiae earum facilis
        amet, consequuntur omnis ex ea asperiores! Repudiandae.
      </div>
      <GHW isFixed />
    </div>
  ));
