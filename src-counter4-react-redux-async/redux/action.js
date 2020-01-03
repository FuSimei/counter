import { INCREMENT, DECREMENT } from "./action-types";

// 包含所有的action creator
// 增加
export const increment = (number) => ({type: INCREMENT, data: number});     //返回一个对象
export const decrement = (number) => ({type: DECREMENT, data: number})

export const incrementAsync = (number) => {
    return dispatch => {
        // 异步的代码
        setTimeout(() => {
            // 异步要调用一个同步的方法
            dispatch(increment(number))
        }, 1000) 
    }
}