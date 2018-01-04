import React, { Component } from 'react'
import {connect} from 'react-redux'
// class Hbb extends Component{

//     render(){
//         return(
//             <h1>我是暂时组件</h1>
//         )
//     }
// }


const mapStateToProps = (state, ownProps) => ({
    active: state
  })

function Hbb(props){
    console.log(props)
    return (
        <h1>{props.active}</h1>
    )
}




Hbb = connect(mapStateToProps)(Hbb)

export default Hbb