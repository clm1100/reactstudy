import React, { Component } from 'react'

class Frominput extends Component {
    constructor() {
        super()
        this.state = {
            username: '111',
            content: '33333',
        }
    }
    change(e) {
        this.setState({
            username: e.target.value
        })
    }
    ContentChange(event) {
        console.log(this)
        this.setState({
            content: event.target.value
        })
    }
    ChildsetArr(obj){
        console.log(this)
        this.props.setArr(obj)
        this.setState({
            username:'',
            content:''
        })
    }
    render() {
        return (
            <div>
                用户名: <input type="text" value={this.state.username}
                    onChange={this.change.bind(this)}
                />
                <br />
                评论内容 <input type="text" value={this.state.content}
                    onChange={this.ContentChange.bind(this)}
                />
                <br />
                <button onClick = {()=>{this.ChildsetArr.call(this,this.state)}}>提交</button>
            </div>
        )
    }
}

export default Frominput