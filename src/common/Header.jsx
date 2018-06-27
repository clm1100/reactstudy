import React, { Component } from 'react'
import {connect} from 'react-redux'
import Test1 from './Test1'




class Header extends Component {
    constructor() {
        super();
        this.state={
            a:222
        }
    }
    // 发送异步action dispatch的参数默认为对象,但是接住了thunk,之后dispatch的对象就可以使用函数了，
    // 这个函数有两个参数,dispatch和getState,异步操作完成知乎发送dispatch;
    setA(e) {
        this.props.dispatch(function(dispatch,getState){
            setTimeout(()=>{
                dispatch({
                    type: 'ADDATTR',
                    payload: { title: this.state.a, id: Math.random() * 100000000 }
                })
                this.setState({ a: '' })
            },3000)
        }.bind(this))
    }
    change(e){
        this.setState({
            a:e.target.value
        })
    }
    render() {
        return (
            <div className='Header'>
            <Test1 />
            <ul>
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
// const mapDispatchToProps
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