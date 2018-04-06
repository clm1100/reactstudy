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
       console.log(this.state.a)
       this.props.addAttr({title:this.state.a,id:Math.random()*100000000})
    }
    change(e){
        this.setState({
            a:e.target.value
        })
    }
    render() {
        let b = 110000;
        var bb = this.state.a
        return (
            <div className='Header'>
            <ul>
                {/* <li >ceshi!!!</li> */}
                {/* {this.props.active.map(e=>{
                    return (<li key={e.id}>{e.title}</li>)
                })} */}
                {this.props.arr}
            </ul>
            <h1>{this.props.active}</h1>
                <h2>{bb}</h2>
                <h1>{b}</h1>
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
export default  connect(mapStateToProps,mapDispatchToProps)(Header)