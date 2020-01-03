import { INCREMENT, DECREMENT } from "./action-types";

// 包含所有的action creator
// 增加
export const increment = (number) => ({type: INCREMENT, data: number});     //返回一个对象
export const decrement = (number) => ({type: DECREMENT, data: number})