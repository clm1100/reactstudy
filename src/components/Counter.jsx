import React, { Component } from 'react'
import { connect } from 'react-redux'
class Counter extends Component {
    static defaultProps = {ccd:22222}
    constructor(props) {
        console.log(props)
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.ccd}</h3>
                <button onClick={this.props.onClick.bind(this)}>按钮</button>
                <button onClick={this.props.onClick1}>按钮</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    active: state.abc.a
})

const mapDispatchToProps = (dispatch, ownProps) =>{
    console.log(ownProps)
 return {
    onClick: () => {
        //   dispatch(setVisibilityFilter(ownProps.filter))
        dispatch({ type: 'INCREMENT' })
    },
    onClick1: () => {
        //   dispatch(setVisibilityFilter(ownProps.filter))
        dispatch({ type: 'DECREMENT' })
    },
    hub: () => {
        console.log(this);
        console.log("3333333333")
    }
}}
function aa(){console.log("aa")}

Counter = connect(mapStateToProps,mapDispatchToProps)(Counter)
export default Counter
