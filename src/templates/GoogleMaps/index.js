// https://cuneyt.aliustaoglu.biz/en/using-google-maps-in-react-without-custom-libraries/
import React from "react";

class Map extends React.Component {
  componentDidMount() {
    const mapSrc = `https://maps.google.com/maps/api/js?key=${
      process.env.REACT_APP_GOOGLE_MAP_KEY
    }`;

    if (!window.google) {
      let mapScript = this.getExistingMapScript(mapSrc);

      if (mapScript === 0) {
        const newMapScript = document.createElement("script");
        newMapScript.type = "text/javascript";
        newMapScript.src = mapSrc;
        const x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(newMapScript, x);
        mapScript = newMapScript;
      }

      // Below is important.
      // We cannot access google.maps until it's finished loading
      mapScript.addEventListener("load", () => {
        this.onScriptLoad();
      });
    } else {
      this.onScriptLoad();
    }
  }

  onScriptLoad = () => {
    const { id, options, onMapLoad } = this.props;
    const map = new window.google.maps.Map(
      document.getElementById(id),
      options
    );
    onMapLoad(map);
  };

  getExistingMapScript = url => {
    if (!url) return 0;
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i += 1) {
      if (scripts[i].src === url) return scripts[i];
    }
    return 0;
  };

  render() {
    const { id, children } = this.props;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { id })
    );

    return <>{childrenWithProps}</>;
  }
}

export default Map;
