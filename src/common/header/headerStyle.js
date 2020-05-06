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

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    outline: none;
    border-radius: 19px;
    background: #eee;
    border: none;
    margin-top: 9px;
    padding: 0 40px 0 20px;
    font-size: 14px;
    box-sizing: border-box;
    &::placeholder {
        color: #999;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    font-size: 15px;
    border-radius: 19px;
    border: solid 1px #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`
