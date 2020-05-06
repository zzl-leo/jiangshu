// 用于整合各个部分的reducer
import {combineReducers} from 'redux'
// import headerReducer from '../common/header/store/reducer'
import {reducer as headerReducer} from '../common/header/store'

export default combineReducers({
    header: headerReducer
})