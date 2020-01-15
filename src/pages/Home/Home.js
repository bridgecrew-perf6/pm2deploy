import React from "react";
import Page from "../../components/Page/Page";
import Style from "./Home.module.scss";
import Heading from "../../components/Heading/Heading";

const propsHome = { setHeader: { setClass: "gap" } };

class Home extends React.Component {
  render() {
    return <Page {...propsHome}></Page>;
  }
}

export default Home;
