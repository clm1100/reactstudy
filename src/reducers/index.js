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


let arr = (state = [], action) => {
    switch (action.type) {
      case 'ADDATTR':
        return [...state,action.payload]
      default:
        return state
    }
  }




  export default combineReducers({abc,arr})