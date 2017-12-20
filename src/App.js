import React,{Component} from 'react';
import{HashRouter as Router,Route} from 'react-router-dom';
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import LogOrReg from "./containers/LogOrReg/index";
import NavLeft from "./containers/NavLeft/index";
import PersonalCenter from "./containers/Profile/PersonalCenter/index";
import createHashHistory from '../node_modules/history/createHashHistory';
import {ConnectedRouter} from 'react-router-redux'
let history =createHashHistory();
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route path="/personalcenter" component={PersonalCenter}/>
                    <Route path="/logorreg" component={LogOrReg}/>
                    <Route path="/navleft" component={NavLeft}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                </div>

            </ConnectedRouter>
        )
    }
}
