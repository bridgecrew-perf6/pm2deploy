import React from "react";
import "./scss/global.scss";
import { getMasterCity } from "./api";

import Button from "./components/Button/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCity: []
    };
  }

  async componentDidMount() {
    const { data, error } = await getMasterCity();

    console.log(data);
    console.log(error);
  }

  render() {
    const { masterCity } = this.state;
    return (
      <div>
        <Button>asdasd</Button>
        <p>asdasdasd</p>
        {masterCity.map(item => (
          <div key={item.id}>{item.city_name}</div>
        ))}
      </div>
    );
  }
}

export default App;
