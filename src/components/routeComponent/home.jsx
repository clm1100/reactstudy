import React from 'react'
import { Component } from "react";
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            aa:333232323232
        }
    }

    get aa(){
        return this.state.aa
    }
    set aa(val){
        this.setState({
            aa:val
        })
    }

    render(){
        return <h1>{this.aa}</h1>
        
    }
    componentDidMount(){
        this.aa = 99999
    }
 }

 export default Home;