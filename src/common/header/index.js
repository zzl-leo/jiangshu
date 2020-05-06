import React, { Component } from "react";
//然后在需要使用的组件中引入
import { HeaderWapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from "./headerStyle";
//最后在需要使用的地方使用
class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className="writting">写文章</Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWapper>
    )
  }
}

export default Header;
