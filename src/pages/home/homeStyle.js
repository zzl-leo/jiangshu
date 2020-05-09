import styled from "styled-components";

export const HomeWapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        border-radius: 6px;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-right: 15px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    overflow: hidden;
    .topic-pic {
        width: 32px;
        vertical-align: middle;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`
// background: url(${(props) => props.imgUrl});
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    height: 300px;
    line-height: 300px;
    text-align: center;
` 

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
` 
