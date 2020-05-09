import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from '../store';
import { ListItem, ListInfo, LoadMore } from "../homeStyle";
class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map((item,index) => {
          return (
            <ListItem key={index}>
              <img className="pic" alt="listImg" src={item.get("imgUrl")} />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home','articleList']),
    page: state.getIn(['home','articlePage']),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
