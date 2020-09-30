import React from "react";
import { getArticleList } from "../../api";
import ViewersAPI from "./ViewersAPI";

class Simulating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retArticleList: false,
      retCreateArticle: false,
    };
  }

  doArticleList = async () => {
    this.setState({ retArticleList: "loading" });
    const res = await getArticleList();
    this.setState({ retArticleList: res });
  };

  render() {
    const { retArticleList, retCreateArticle } = this.state;

    const loadList = retArticleList === "loading";

    return (
      <div>
        <h1>Simulating page</h1>
        <section>
          <button
            type="button"
            disabled={loadList}
            onClick={this.doArticleList}
          >
            {loadList ? "Loading..." : "API ARTICLE LIST"}
          </button>
          <ViewersAPI {...retArticleList} />
        </section>
        <br />
        <section>
          <button type="button">API CREATE ARTICLE</button>
          <ViewersAPI {...retCreateArticle} />
        </section>
      </div>
    );
  }
}

export default Simulating;
