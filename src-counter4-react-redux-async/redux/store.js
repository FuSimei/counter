import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {counter} from './reducers';

// 生成一个store对象
const store =  createStore(
    counter,
    // applyMiddleware(thunk)  //应用上异步中间件
    composeWithDevTools(applyMiddleware(thunk)) //应用redux插件管理
);    //内部会第一次调用reducer函数得到初始值0

export default store;

