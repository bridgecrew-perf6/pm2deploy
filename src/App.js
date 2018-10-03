import React from "react";
import "./components/index.css";
import { getMasterCity } from "./api";

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
        {masterCity.map(item => (
          <div key={item.id}>{item.city_name}</div>
        ))}
      </div>
    );
  }
}

export default App;
