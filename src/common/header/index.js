import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import * as actionCreators from "./store/actionCreators";
//然后在需要使用的组件中引入
import {
  HeaderWapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SerachInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./headerStyle";
//最后在需要使用的地方使用

class Header extends Component {
  getListArea = () => {
    const {list, focused, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props
    const pageList = []
    const newList = list.toJS() // list 是immutable数据，不支持数组下标检索
    if(newList.length) { // 只有list请求完后才执行
      for(let i = (page - 1) * 10; i < page * 10; i++ ) {
        if(newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SerachInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon)=>this.spinIcon = icon} className="iconfont">&#xe612;</i>
              <span>换一批</span>
             </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {/* {
              list.map((item) => (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>
            ))
            } */}
            {pageList}
          </SearchInfoList>
        </SerachInfo>
      );
    } else {
      return null;
    }
  };
  render() {
    // 解构赋值
    const {focused,list, handleInputFocused, handleInputBlur} = this.props
    return (
      <HeaderWapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe604;</i>
          </NavItem>

          <SearchWrapper>
            <CSSTransition
              timeout={220}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                onFocus={() => handleInputFocused(list)}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe662;
            </i>
            {this.getListArea(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe6a4;</i> 写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused,
    // 使用immutable库后引用immutable对象的数据
    // focused: state.header.get('focused')

    // 使用redux-immutable后state变成了immutable对象
    // focused: state.get('header').get('focused')
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]), // 热门搜索标签页码
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    mouseLeave: state.getIn(["header", "mouseLeave"]),

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused(list) {
      console.log(list)
      if(list.size === 0) {
        // 搜索框聚焦时，派发一个异步请求的action
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
