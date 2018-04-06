import React, { Component } from 'react'
import { connect } from 'react-redux'
class Counter extends Component {
    constructor(props) {
        console.log(props)
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onClick.bind(this)}>按钮</button>
                <button onClick={this.props.onClick1}>按钮</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    active: state.abc.a
  })

  const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
    //   dispatch(setVisibilityFilter(ownProps.filter))
      dispatch({type:'INCREMENT'})
    },
    onClick1: () => {
        //   dispatch(setVisibilityFilter(ownProps.filter))
          dispatch({type:'DECREMENT'})
        },
    hub:()=>{
        console.log(this);
        console.log("3333333333")
    }
  })


Counter = connect(mapStateToProps,mapDispatchToProps)(Counter)
export default Counter
