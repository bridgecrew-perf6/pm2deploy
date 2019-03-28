import React from "react";
import { useSpring, animated } from "react-spring";
import Accordion from "../templates/Accordion";
import useOnlineStatus from "../templates/CustomHook/useOnlineStatus";
import useSizmekTracker from "../templates/CustomHook/useSizmekTracker";
import useDeviceOrientation from "../templates/CustomHook/useOrientation";

const data = [
  {
    header: "lorem",
    content:
      "asdasdasdqjwdehrjbhjgjshgsknksjnfkvsnfjkvsfvnskjnvjsfngbjslgjbns;gn;nankvsjgnjkbnksgb",
    isOpen: false
  },
  {
    header: "lorem",
    content:
      "asdasdasdqjwdehrjbhjgjshgsknksjnfkvsnfjkvsfvnskjnvjsfngbjslgjbns;gn;nankvsjgnjkbnksgb",
    isOpen: false
  },
  {
    header: "lorem",
    content:
      "asdasdasdqjwdehrjbhjgjshgsknksjnfkvsnfjkvsfvnskjnvjsfngbjslgjbns;gn;nankvsjgnjkbnksgb",
    isOpen: false
  },
  {
    header: "lorem",
    content:
      "asdasdasdqjwdehrjbhjgjshgsknksjnfkvsnfjkvsfvnskjnvjsfngbjslgjbns;gn;nankvsjgnjkbnksgb",
    isOpen: false
  },
  {
    header: "lorem",
    content:
      "asdasdasdqjwdehrjbhjgjshgsknksjnfkvsnfjkvsfvnskjnvjsfngbjslgjbns;gn;nankvsjgnjkbnksgb",
    isOpen: false
  },
  {
    header: "lorem",
    content:
      "asdasdasdqjwdehrjbhjgjshgsknksjnfkvsnfjkvsfvnskjnvjsfngbjslgjbns;gn;nankvsjgnjkbnksgb",
    isOpen: false
  }
];

function Dashboard() {
  // useSizmekTracker();
  const value = useDeviceOrientation();

  const onlineStatus = useOnlineStatus({
    onOnline: () => {
      console.log("I'm Online");
    },
    onOffline: () => {
      console.log("I'm Offline");
    }
  });
  const props = useSpring({
    xys: [0, 0, 1],
    mass: 500,
    tension: 350,
    friction: 40
  });
  const trans = (x, y) =>
    `perspective(300px) rotateX(${-value.beta / 3}deg) rotateY(${-value.gamma /
      3}deg)`;

  return (
    <>
      <div>
        You Are Currently
        {trans(10, 10)}
      </div>
      <animated.div
        className="card"
        // onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        // onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {data.map(item => (
        <Accordion isOpen={item.isOpen}>
          {({ toggle, isOpen }) => (
            <div>
              <button onClick={toggle} role="tablist">
                {!isOpen ? "+" : "-"}
                {item.header}
              </button>
              {isOpen && (
                <div style={isOpen ? { color: "blue" } : { color: "red" }}>
                  {item.content}
                </div>
              )}
            </div>
          )}
        </Accordion>
      ))} */}
      </div>
    </>
  );
}

export default Dashboard;
