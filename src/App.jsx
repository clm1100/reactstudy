import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './common/Header'
import Head from "./common/Head";
import Test1 from './common/Test1'
class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Test1 />
        <Header />
        <Head />
      </div>
    )
  }
}
export default App;
