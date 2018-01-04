import React, { Component } from "react"
class Content extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.arr.map((ele, index) => {
                        return (<li key={index + 1}>
                            <span>姓名：{ele.username}</span>
                            <p>内容：{ele.content}</p>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Content
