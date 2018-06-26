import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './common/Header'
import Head from "./common/Head";
import Frominput from './components/Forminput'
import Content from './components/Content'
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
        <Frominput setArr = {this.setArr.bind(this)} />
        <Frominput setArr = {this.setArr.bind(this)} />
        <Content arr={this.state.arr} />
      </div>
    )
  }
}
export default App;
