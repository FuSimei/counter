// 包含n个reducer的函数模块
import { INCREMENT, DECREMENT } from './action-types';
export function counter (state = 0, action) {   //形参默认值
    console.log('counter()', state, action);
    switch (action.type) {
        case INCREMENT: 
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state
    }
}