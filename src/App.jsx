import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({isLiked:!this.state.isLiked})
    this.setState(function(state){
      console.log(state);
     return {a:'334444哦哦哦'}
   })
  }

  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'} 👍
      </button>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton />
      </div>
    )
  }
}

export default Index;
