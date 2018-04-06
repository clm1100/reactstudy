import { combineReducers } from 'redux';

let abc = (state = {a:0}, action) => {
    switch (action.type) {
      case 'INCREMENT':
      state.a++
        return {
            a:state.a
        }
      case 'DECREMENT':
      state.a--
        return {
            a:state.a
        }
      default:
        return {
            a:state.a
        }
    }
  }

  export default combineReducers({abc})