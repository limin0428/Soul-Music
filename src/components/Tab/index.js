import React,{Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom'
export default class Tab extends Component{
    constructor(){
        super();
        this.state={isPlay:false}
    }
    changePlay=()=>{
        this.setState({isPlay:!this.state.isPlay})
    };
    render(){
        return (
            <div className="home-tab">
                <Link to="/single" className="tab-content">
                <div className="tab-image">
                   <img src={require('../../../image/music1.jpg')}/>
                </div>
                <div className="tab-title">
                    <p>越长大越孤单</p>
                    <p>作词：KiKi(富妍)</p>
                </div>
                </Link>
                <div className="tab-icon">
                    <div className="tab-list">
                        <i className="iconfont icon-yinleliebiao1"></i>
                    </div>
                    <div className="tab-play" onClick={this.changePlay}>
                        {
                           this.state.isPlay?<i className="iconfont icon-yinlebofang"></i>:<i className="iconfont icon-yinlezanting"></i>
                        }
                    </div>
                </div>
            </div>
        )
    }
}