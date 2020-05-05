import styled from "styled-components";
import logoPic from '../../static/logo.png'
export const HeaderWapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    width: 100px;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPic});
    background-size: contain;
    cursor: pointer;
`

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    background: green;
`
// #ea6f5a
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`
