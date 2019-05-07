import React from "react";
import { useSpring, animated } from "react-spring";
import useDeviceOrientation from "../templates/CustomHook/useOrientation";
import useMousePosition from "../templates/CustomHook/useMousePosition";

function Dashboard() {
  const { beta, gamma } = useDeviceOrientation();
  const { x, y } = useMousePosition();
  const props = useSpring({
    xys: [0, 0, 1],
    mass: 500,
    tension: 350,
    friction: 40
  });

  const a = gamma || x / 15;
  const b = beta || -y / 15;

  const trans = () => `perspective(300px) translate(${-a}px, ${-b}px)`;
  return (
    <>
      <animated.div
        className="card"
        // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        // onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </>
  );
}

export default Dashboard;
