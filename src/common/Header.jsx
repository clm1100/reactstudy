import React, { Component } from 'react'
import {connect} from 'react-redux'

// const mapStateToProps = (state, ownProps) => ({
//     active: state.abc.a
//   })

class Header extends Component {
    constructor() {
        super();
        this.state={
            a:222
        }
    }
    setA(e) {
    //    this.props.addAttr({title:this.state.a,id:Math.random()*100000000})
       this.props. dispatch({
        type:'ADDATTR',
        payload:{title:this.state.a,id:Math.random()*100000000}
    })
       this.setState({a:''})
    }
    change(e){
        this.setState({
            a:e.target.value
        })
    }
    render() {
        return (
            <div className='Header'>
            <ul>
                {/* <li >ceshi!!!</li> */}
                {this.props.arr.map(e=>{
                    return (<li key={e.id}>{e.title}</li>)
                })}
                {this.props.arr.length}
            </ul>
            <h1>{this.props.active}</h1>
                <input value={this.state.a} type="text"  onChange={this.change.bind(this)}/>
                <button  onClick={this.setA.bind(this)}>添加</button>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        arr:state.arr
    }
}
// const mapS
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
export default  connect(mapStateToProps)(Header)