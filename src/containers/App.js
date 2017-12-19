import React,{Component} from 'React';
import{HashRouter as Router,Route} from 'react-router-dom';
import Login from "./Login/index";
import Reg from "./Reg/index";
import LogOrReg from "./LogOrReg/index";
import NavLeft from "./NavLeft/index";
import PersonalCenter from "./Profile/PersonalCenter/index";
import Home from "./Home/index";


export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/personalcenter" component={PersonalCenter}/>
                    <Route path="/logorreg" component={LogOrReg}/>
                    <Route path="/navleft" component={NavLeft}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                </div>
            </Router>
        )
    }
}
