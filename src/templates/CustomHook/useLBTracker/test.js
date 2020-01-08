import { useState, useEffect } from "react";

function getOnlineStatus() {
  return typeof navigator !== "undefined" &&
    typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;
}

function useOnlineStatus({ onOnline, onOffline }) {
  const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());

  const goOnline = () => {
    setOnlineStatus(true);
    onOnline();
  };
  const goOffline = () => {
    setOnlineStatus(false);
    onOffline();
  };

  useEffect(() => {
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return onlineStatus;
}

export default useOnlineStatus;
