import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import * as actionCreators from './store/actionCreators';
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
} from "./headerStyle";
//最后在需要使用的地方使用
const Header = (props) => {
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
          <CSSTransition timeout={220} in={props.focused} classNames="slide">
            <NavSearch
              onFocus={props.handleInputFocused}
              onBlur={props.handleInputBlur}
              className={props.focused ? "focused" : ""}
            ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe662;
          </i>
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
};

const mapStateToProps = (state) => {
  return {
    // focused: state.header.focused,
    // 使用immutable库后引用immutable对象的数据
    focused: state.header.get('focused')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocused() {
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
