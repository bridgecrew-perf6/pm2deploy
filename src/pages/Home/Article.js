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

  render() {
    const { view } = this.state;
    return (
      <div>
        <section>
          <h1>Article Page</h1>
          <h2>{view}</h2>
        </section>
        <section>
          <h2>Create Article</h2>
          <input placeholder="Article ID" type="number" />
          <br />
          <textarea placeholder="Article Body" />
        </section>
      </div>
    );
  }
}

export default Article;
