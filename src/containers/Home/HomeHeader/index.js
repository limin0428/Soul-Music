import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom'
export default class HomeHeader extends Component{
    render(){
        return (
            <div className="home-header">
                <Link to="/personal">
                    <i className="iconfont icon-wodeyinyueliebiaomoshi24 personal">
                    </i>
                </Link>
                <i className="music-library iconfont icon-yinle3"></i>
                <Link to="/search">
                <i className="iconfont icon-sousuo search"></i>
                </Link>
            </div>
        )
    }
}