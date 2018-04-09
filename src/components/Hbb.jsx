import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from "../common/Header.jsx";
class Hbb extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <h1>{this.props.active}</h1>
            <h1>哈哈哈哈</h1>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    active: state.abc.a
  })

Hbb = connect(mapStateToProps)(Hbb)

export default Hbb