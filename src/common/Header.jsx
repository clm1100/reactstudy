import React, { Component } from 'react'

class Header extends Component {
    constructor() {
        super();
        this.state={
            a:222
        }
    }
    setA() {
        console.log(this);
        this.setState({
            a:"二狗"
        })
    }
    render() {
        let b = 110000;
        var bb = this.state.a
        return (
            <div>
                <h2>{bb}</h2>
                <h1>{b}</h1>
                <input type="text" />
                <button  onClick={this.setA.bind(this)}>添加</button>
            </div>
        )
    }
}

export default Header