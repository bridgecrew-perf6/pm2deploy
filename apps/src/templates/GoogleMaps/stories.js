import React from "react";
import { storiesOf } from "@storybook/react";

import GoogleMaps from "./index";

storiesOf("GoogleMaps", module).add("default", () => (
  <GoogleMaps
    id="myMap"
    options={{
      center: { lat: 41.0082, lng: 28.9784 },
      zoom: 8
    }}
    onMapLoad={map => {
      // marker object needed to be made using new keyword
      // eslint-disable-next-line
      const marker = new window.google.maps.Marker({
        animation: window.google.maps.Animation.DROP,
        position: { lat: 41.0082, lng: 28.9784 },
        map
      });
    }}
  >
    <div style={{ width: "800px", height: "200px" }} />
  </GoogleMaps>
));
