import React from "react";
import { createArticle, getArticleDetail, getArticleList } from "../../api";
import ViewersAPI from "./ViewersAPI";

const SimulatingSection = (props) => {
  const { onClick, state, text } = props;
  const loading = state === "loading";
  return (
    <section>
      <button type="button" disabled={loading} onClick={onClick}>
        {loading ? "Loading..." : text}
      </button>
      <ViewersAPI {...state} />
    </section>
  );
};

class Simulating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retList: false,
      retListOffset: false,
      retCreateArticle: false,
      detailWithoutID: false,
      detailNonExistID: false,
    };
  }

  getList = async () => {
    this.setState({ retList: "loading" });
    const res = await getArticleList();
    this.setState({ retList: res });
  };

  getListOffset = async () => {
    this.setState({ retListOffset: "loading" });
    const res = await getArticleList({ limit: 0, offset: 99 });
    this.setState({ retListOffset: res });
  };

  doCreateArticle = async () => {
    this.setState({ retCreateArticle: "loading" });
    const res = await createArticle({
      title: "created by API",
      content: "CONTENT!",
      preview_content: "PREVIEW!",
      is_highlight: "Weekend-API",
    });
    this.setState({ retCreateArticle: res });
  };

  getDetailWithoutId = async () => {
    this.setState({ detailWithoutID: "loading" });
    const res = await getArticleDetail();
    this.setState({ detailWithoutID: res });
  };

  getDetailNonId = async () => {
    this.setState({ detailNonExistID: "loading" });
    const res = await getArticleDetail(900);
    this.setState({ detailNonExistID: res });
  };

  render() {
    const {
      retList,
      retCreateArticle,
      retListOffset,
      detailWithoutID,
      detailNonExistID,
    } = this.state;

    return (
      <div>
        <h1>Simulating page</h1>
        <SimulatingSection
          onClick={this.getList}
          text="Get Article List - default"
          state={retList}
        />
        <br />
        <SimulatingSection
          onClick={this.getListOffset}
          text="Get Article List - offset"
          state={retListOffset}
        />
        <br />
        <SimulatingSection
          onClick={this.getDetailWithoutId}
          text="Get Article without ID"
          state={detailWithoutID}
        />
        <br />
        <SimulatingSection
          onClick={this.getDetailNonId}
          text="Get Article non existing ID"
          state={detailNonExistID}
        />
        <br />
        <SimulatingSection
          onClick={this.doCreateArticle}
          text="API CREATE ARTICLE"
          state={retCreateArticle}
        />
      </div>
    );
  }
}

export default Simulating;
