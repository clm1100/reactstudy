import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './common/Header'
import Head from "./common/Head";
class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: [{
        username: 'zhangsan',
        content: '我饿uwieuwqioeuwq'
      }]
    }
  }
  setArr({username,content}) {
    this.setState({
      arr: this.state.arr.concat({
        username: username,
        content: content
      })
    })
    this.setState(function (state) {
      console.log(state)
    })
  }
  render() {
    console.log(this.props,'iiiiiiiiiii')
    return (
      <div>
        <Header />
        <Head />
      </div>
    )
  }
}
export default App;
