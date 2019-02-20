import React from "react";
import { setTimeout } from "timers";
import Accordion from "../templates/Accordion";
import LazyImage from "../templates/LazyImage";
import useOnlineStatus from "../templates/CustomHook/useOnlineStatus";
import usePageTracker from "../templates/CustomHook/usePageTracker";

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

const soManyDataSoMuchSky = [
  "https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/417045/pexels-photo-417045.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/875858/pexels-photo-875858.png?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/675977/blue-sky-merge-clouds-675977.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/412462/pexels-photo-412462.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/215/road-sky-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/221125/pexels-photo-221125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/907485/pexels-photo-907485.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/627823/pexels-photo-627823.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/53153/full-moon-moon-night-sky-53153.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/164175/pexels-photo-164175.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/314726/pexels-photo-314726.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/33479/balloon-heart-love-romance.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/417122/pexels-photo-417122.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/533877/pexels-photo-533877.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/713664/pexels-photo-713664.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/116720/pexels-photo-116720.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/462024/pexels-photo-462024.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/449751/pexels-photo-449751.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/258149/pexels-photo-258149.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/139366/pexels-photo-139366.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/355312/pexels-photo-355312.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/814449/pexels-photo-814449.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/165754/pexels-photo-165754.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/7117/mountains-night-clouds-lake.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/14676/pexels-photo-14676.png?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/67832/sunrise-sky-blue-sunlight-67832.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/216630/pexels-photo-216630.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/544554/pexels-photo-544554.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/372098/pexels-photo-372098.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/631342/pexels-photo-631342.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/417222/pexels-photo-417222.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
];

function Dashboard() {
  usePageTracker();
  const onlineStatus = useOnlineStatus({
    onOnline: () => {
      console.log("I'm Online");
    },
    onOffline: () => {
      console.log("I'm Offline");
    }
  });
  return (
    <>
      <div>
        You Are Currently
        {JSON.stringify(onlineStatus)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {soManyDataSoMuchSky.map(item => (
          <div style={{ width: "200px" }}>
            <LazyImage
              alt={item}
              title="Testing Lazy"
              src={item}
              imageRatioWidth={16}
              imageRatioHeight={9}
            />
          </div>
        ))}
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
