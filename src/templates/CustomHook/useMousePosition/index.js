import { useState, useEffect } from "react";

function useMousePosition() {
  const [MousePosition, setMousePosition] = useState({
    x: null,
    y: null
  });

  function handleMousePosition(event) {
    setMousePosition({
      x: event.x,
      y: event.y
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition, true);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return MousePosition;
}

export default useMousePosition;
