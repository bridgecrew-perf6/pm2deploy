import React from "react";
import { storiesOf } from "@storybook/react";

import CookieNotification from "./index";

storiesOf("CookieNotification", module).add("default", () => (
  <CookieNotification>
    {({ close, isOpen }) => (
      <div style={{ display: `${!isOpen ? "none" : ""}` }}>
        <div>
          <div>Cookies</div>
          <div>This site uses Cookies.</div>
          <div>
            We do this to remember your preferences and compile analytics of
            visit. By using our site, you agree to our use of all cookies.
          </div>
          <div>
            <button onClick={close}>Tutup</button>
          </div>
        </div>
      </div>
    )}
  </CookieNotification>
));
