import * as actionType from './actionTypes'

import {fromJS} from 'immutable'
// immutable.js 可以生成immutable对象，不可改变的对象
// 安装immutable.js  yarn add immutable
const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {
    if(action.type === actionType.SEARCH_FOCUS) {
        // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true)
    }
    if(action.type === actionType.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state
}