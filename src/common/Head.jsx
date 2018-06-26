import React, { Component } from 'react'
import {connect} from 'react-redux'
class Head extends Component{
    constructor(){
        super()
    }
    render(){
        
        return(
            <h1 onClick = {function(){this.props.addAttr({title:"232313123",id:"343434"})}.bind(this)}>{this.props.arr.length}</h1>
        )
    }
}
const mapDispatchToProps=(dispatch,ownprops)=>{
    return {
        addAttr(payload){
            dispatch({
                type:'ADDATTR',
                payload
            })
        }
    }
}

const mapStateToProps = (state,ownProps)=>{
    return{
        arr:state.arr
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Head)