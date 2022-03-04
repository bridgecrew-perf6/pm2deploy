import React from "react";
import Page from "../../components/Page/Page";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <Page>
        <h1>Home Works</h1>
        <p>lorem ipsum dolor sit amet</p>
      </Page>
    );
  }
}

export default Home;
