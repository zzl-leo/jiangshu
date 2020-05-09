import * as actionType from './actionTypes'
import {fromJS} from 'immutable'
import axios from 'axios'
export const searchFocus = () => ({
    type: actionType.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionType.SEARCH_BLUR
})

export const mouseEnter = () => ({
    type: actionType.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: actionType.MOUSE_LEAVE
})

export const changePage = (page) => ({
    type: actionType.CHANGE_PAGE,
    page: page
})

const changeList = (data) => ({
    type: actionType.CHANGE_LIST,
    data: fromJS(data), // 统一数据类型
    totalPage: Math.ceil(data.length / 10) // 计算总页数数
})

// getList
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            if(res.data.success) {
                const action = changeList(res.data.data)
                dispatch(action)
            }
        }).catch(
            () => {
                console.log('error: getheaderList')
            }
        )
    }
}