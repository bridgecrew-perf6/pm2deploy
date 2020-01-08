import { useEffect } from "react";

function usePageTracker() {
  useEffect(() => {
    const oldLB = document.getElementById("lightning_bolt");
    if (oldLB) oldLB.parentNode.removeChild(oldLB);

    const LBScript = document.createElement("script");

    LBScript.id = "lightning_bolt";
    LBScript.src = "//cdn-akamai.mookie1.com/LB/LightningBolst.js";

    document.body.appendChild(LBScript);
  }, []);
}

export default usePageTracker;
