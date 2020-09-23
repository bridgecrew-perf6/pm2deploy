import React from "react";
import { getArticleList, getToken } from "../../api";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], detail: false };
  }

  componentDidMount() {
    this.getList();
  }

  getList = async () => {
    const { data, error } = await getArticleList();
    if (error && error.code) console.log("ERROR", error.message);
    else this.setState({ list: data });
  };

  doGetToken = async () => {
    const { error, data } = await getToken({
      name: "user",
      secret_key: "user123",
    });
    console.log({ data }, { error });
  };

  render() {
    return (
      <section>
        <h1>HOME</h1>

        <p>
          <button onClick={this.doGetToken}>GET TOKEN</button>
        </p>
      </section>
    );
  }
}

export default Home;
