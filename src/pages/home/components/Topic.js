import React, {Component} from 'react'
import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../homeStyle'
class Topic extends Component {
    render() {
        const {list} = this.props
        return (
            <div>
                <TopicWrapper>
                    {
                        list.map((item) => {
                            return (
                                <TopicItem key={item.get('id')}>
                                    <img className="topic-pic" alt="icon" src={item.get('imgUrl')} />
                                    {item.get('title')}
                                </TopicItem>
                            )
                        })
                    }
                </TopicWrapper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get('home').get('topicList')
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {

    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Topic)