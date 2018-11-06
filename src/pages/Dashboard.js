import React from "react";
import Accordion from "../templates/Accordion";

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

const Dashboard = () => (
  <div>
    {data.map(item => (
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
    ))}
  </div>
);

export default Dashboard;
