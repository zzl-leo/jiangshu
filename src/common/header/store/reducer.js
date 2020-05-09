import * as actionType from './actionTypes'

import {
    fromJS
} from 'immutable'
// immutable.js 可以生成immutable对象，不可改变的对象
// 安装immutable.js  yarn add immutable
const defaultState = fromJS({
    focused: false, // 搜索栏聚焦
    mouseIn: false,
    list: [], // 热门搜索标签列表
    page: 1, // 页码控制list切换
    totalPage: 1
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.SEARCH_FOCUS:
            // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
            return state.set('focused', true)
        case actionType.SEARCH_BLUR:
            return state.set('focused', false)
        case actionType.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage)
            return state.merge({ // merge可以同时设置多个数据内容（执行多个set内容）
                list: action.data,
                totalPage: action.totalPage
            })
        case actionType.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionType.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionType.CHANGE_PAGE:
            return state.set('page', action.page)
        default:
            return state;
    }
    // if (action.type === actionType.SEARCH_FOCUS) {
    //     // immutable对象的set方法会结合之前immutable对象的值和设置的值，返回一个全新的对象
    //     return state.set('focused', true)
    // }
    // if (action.type === actionType.SEARCH_BLUR) {
    //     return state.set('focused', false)
    // }
    // if (action.type === actionType.CHANGE_LIST) {
    //     console.log(action)
    //     return state.set('list', action.data)
    // }
    // return state
}