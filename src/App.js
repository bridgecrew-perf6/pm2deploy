import React from "react";
import "./components/index.css";
import MainService from "./api/base";

const data = [
  {
    id: 1,
    item: "nyam",
    link: "/testing"
  },
  {
    id: 2,
    item: "nyam",
    link: "/testing"
  },
  {
    id: 3,
    item: "nyam",
    link: "/testing"
  },
  {
    id: 4,
    item: "nyam",
    link: "/testing"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    const request = MainService("getAllPrimary").doRequest();

    request.on("done", result => {
      this.setState({ data: result.body.data });
    });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        {data.map(item => (
          <div key={item.id}>{item.item}</div>
        ))}
      </div>
    );
  }
}

export default App;
