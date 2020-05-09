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
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 280px;
    }
    &.slide-enter {
        transition: all 0.3s ease-out;
    }
    &.slide-enter-active {
        width: 280px;
    }
    &.slide-exit {
        transition: all 0.3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`

export const SerachInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
    cursor: pointer;
    display: inline-block;
    width: 65px;
    .iconfont {
        display: block;
        float: left;
        margin-right: 4px;
        font-size: 12px;
        transition: all 0.4s ease-in;
        tansform-origin: center center;
    }
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    font-size: 12px;
    border: solid 1px #ddd;
    cursor: pointer;
    padding: 0 5px;
    line-height: 20px;
    color: #787878;
    border-radius: 3px;
    margin-bottom: 10px;
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

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 7px;
        top: 14px;
        padding: 6px;
        border-radius: 14px;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

