import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header  from './common/Header'
class App extends Component {
  constructor(){
    super()
    this.state= {
      username:'111',
      content:'33333',
      arr:[]
    }
  }
  change(e){
    this.setState({
      username:e.target.value
    })
  }
  ContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }
  setArr(){
    console.log("3333")
    let username = this.state.username
    let content  = this.state.content
    this.setState({
      arr:this.state.arr.concat({
        username:username,
        content:content
      })
    })
    this.setState(function(state){
      console.log(state)
    })
  }
  render () {
    return (
      <div>
        <Header />
        <div>
          用户名: <input type="text" value={this.state.username} 
          onChange={this.change.bind(this)}
          />
          <div>{this.state.username}</div>
          <br/>
          评论内容 <input type="text" value={this.state.content}
          onChange = {this.ContentChange.bind(this)}
          />
          <br/>
          <button onClick = {this.setArr.bind(this)}>提交</button>
        </div>
        <div>
          <ul>  
            {this.state.arr.map((ele,index)=>{
              return (<li key={index+1}>  
              <span>{ele.username}</span>
              <p>{ele.content}</p>
            </li>)
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default App;
