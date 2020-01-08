import React from "react";

function withLBTracker(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      if (process.env.REACT_APP_ENVIRONMENT === "production") {
        const oldVersa = document.getElementById("lightning_bolt");
        if (oldVersa) oldVersa.parentNode.removeChild(oldVersa);

        const versaScript = document.createElement("script");

        versaScript.id = "lightning_bolt";
        versaScript.src = "//cdn-akamai.mookie1.com/LB/LightningBolst.js";

        document.body.appendChild(versaScript);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withLBTracker;
