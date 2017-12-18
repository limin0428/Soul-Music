import React,{Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from "./Home/index";
import '../style/common.less'
export default class App extends Component{
    render(){
        return (
            <Router>
               <div>
                   <Route path="/" component={Home}/>
               </div>
            </Router>
        )
    }
}
