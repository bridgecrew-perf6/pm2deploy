import React from "react";
import { createArticle, getArticleList } from "../../api";
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
    const res = await getArticleList({ limit: 0, offset: 99 });
    this.setState({ retArticleList: res });
  };

  doCreateArticle = async () => {
    this.setState({ retCreateArticle: "loading" });
    const res = await createArticle({
      title: "created by API",
      content: "CONTENT!",
      preview_content: "PREVIEW!",
      is_highlight: "Yes",
    });
    this.setState({ retCreateArticle: res });
  };

  render() {
    const { retArticleList, retCreateArticle } = this.state;

    const loadList = retArticleList === "loading";
    const loadCreate = retCreateArticle === "loading";

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
          <button
            type="button"
            onClick={this.doCreateArticle}
            disabled={loadCreate}
          >
            {loadCreate ? "Loading..." : "API CREATE ARTICLE"}
          </button>
          <ViewersAPI {...retCreateArticle} />
        </section>
      </div>
    );
  }
}

export default Simulating;
