import React,{Component} from 'react';
import HomeTab from "./HomeTab/index";
import HomeFooter from "./HomeFooter/index";

import './index.less'
export default class Home extends Component{
    render(){
        return (
            <div>
              <HomeTab/>
              <HomeFooter/>
            </div>
        )
    }
}