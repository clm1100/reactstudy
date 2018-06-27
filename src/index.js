import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './static/index.css'

import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
//1、 同步redux
// const store = createStore(reducer)
// 2、异步redux的使用方法;
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk,logger)
  );

ReactDOM.render( 
    <Provider store={store}>
    < App / >
    </Provider>
 , document.getElementById('root'));



