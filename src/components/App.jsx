import React,{Component} from 'react'
import { HashRouter,Route } from "react-router-dom";
import Home from './routeComponent/home'
import List from './routeComponent/list'
import About from './routeComponent/about'
// 

export default function Test(){
    return (
        <HashRouter>
            <div>2222233334444
                <Route exact path="/" component={Home} ></Route>
                <Route path="/list" component={List} />
                <Route path="/about" component={About}></Route>
            </div>
        </HashRouter>
    )
}