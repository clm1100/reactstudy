// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import registerServiceWorker from './registerServiceWorker';
// import './static/index.css'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from './reducers'
// const store = createStore(reducer)


// ReactDOM.render( 
//     <Provider store={store}>
//     < App / >
//     </Provider>
//  , document.getElementById('root'));
// registerServiceWorker();


import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import Hbb from './components/Hbb'
import App from './components/App'
import reducer from './reducers'
const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App/>
  ,rootEl
)
render()
