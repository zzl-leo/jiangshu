import React, { Component } from "react";
//然后在需要使用的组件中引入
import { HeaderWapper, Logo, Nav, NavItem } from "./headerStyle";
//最后在需要使用的地方使用 8888
class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登898录</NavItem>
          <NavItem className='right'>Aa</NavItem>
        </Nav>
      </HeaderWapper>
    )
  }
}

export default Header;
