import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    active: state.abc.a
  })

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
            <div className='Header'>
            <h1>{this.props.active}</h1>
                <h2>{bb}</h2>
                <h1>{b}</h1>
                <input type="text" />
                <button  onClick={this.setA.bind(this)}>添加</button>
            </div>
        )
    }
}

export default  connect(mapStateToProps)(Header)