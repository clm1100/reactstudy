import React, { Component } from "react"
class Content extends Component {
    constructor(props) {
        super(props)
        console.log(props,"============")
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.arr.map((ele, index) => {
                        return (<li key={index + 1}>
                            <span>姓1名：{ele.username}</span>
                            <p>内容：{ele.content}</p>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Content
