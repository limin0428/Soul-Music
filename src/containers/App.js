
import React,{Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from "./Home/Home";
import Search from "./Search/index";
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={Search} />
                </div>
            </Router>
        )
    }
}
