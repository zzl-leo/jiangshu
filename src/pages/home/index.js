import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators } from './store';
import {connect} from 'react-redux'
import {
    HomeWapper,
    HomeLeft,
    HomeRight
} from './homeStyle'
class Home extends Component {
    render() {
        return (
            <div>
                <HomeWapper>
                    <HomeLeft>
                        <img alt="banner" className="banner-img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a38b1d56409913d5dc869023ade36d94.jpg?thumb=1&w=1226&h=460&f=webp&q=90" />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                </HomeWapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo());  
        }
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Home)