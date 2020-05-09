import React, { Component } from "react";
import { RecommendWrapper, RecommendItem } from "../homeStyle";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        {list.map((item) => {
          return (
            <RecommendItem
              key={item.get("id")}
              imgUrl={item.get("imgUrl")}
            ></RecommendItem>
          );
        })}
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recommendList"]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
