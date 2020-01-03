import { createStore } from 'redux';
import {counter} from './reducers';

// 生成一个store对象
const store =  createStore(counter);    //内部会第一次调用reducer函数得到初始值0
console.log('st', store);

export default store;

