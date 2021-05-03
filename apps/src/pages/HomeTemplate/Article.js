import React from "react";
import { getArticleDetail, getArticleList } from "../../api";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "list", detail: false, list: false };
  }

  componentDidMount() {
    this.checkPath();
  }

  componentDidUpdate(prevProps) {
    const { location: prevLoc } = prevProps;
    const { location } = this.props;
    if (location.pathname !== prevLoc.pathname) this.checkPath();
  }

  callAPI = async (id) => {
    console.log("CALL API");
    const { view } = this.state;
    let api = getArticleList();
    let state = "list";

    if (view === "detail") {
      api = getArticleDetail(id);
      state = "detail";
    }

    const { data, error } = await api;
    if (error && error.code) alert(error.message);
    else this.setState({ [state]: data });
  };

  checkPath = () => {
    const { match } = this.props;
    let view = "view";
    if (match.params.id) view = "detail";
    this.setState({ view });

    this.callAPI(match.params.id);
  };

  articleList = () => {
    const { list } = this.state;
    if (!list || !list.length) return "Loading. . .";
    return list.map((item) => (
      <div className="article-content" key={`element-${item.id}`}>
        <h4>{item.title}</h4>
        <div>{`Article ID: - ${item.id}`}</div>
        <div>{item.preview_content}</div>
      </div>
    ));
  };

  render() {
    const { view, list } = this.state;
    return (
      <div>
        <section>
          <h1>Article Page</h1>
          <h2>{view}</h2>
          {this.articleList()}
        </section>
        <section>
          <h2>Create Article</h2>
          <input placeholder="Article ID" type="number" />
          <textarea placeholder="Article Body" />
          <button type="button" disabled={!list || !list.length}>
            CREATE
          </button>
        </section>
      </div>
    );
  }
}

export default Article;
