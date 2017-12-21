import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
export default class LogOrReg extends Component {
    render() {
        return (
            <div className="login_bg">
                <div className="logor"></div>
                <div id="logo">
                    <i className="iconfont icon-yinyue1"></i>
                </div>
                <div className="logor"></div>
                <Link className="login_btn" to="./login">登&nbsp;&nbsp;录</Link>
                <Link className="login_btn" to="./reg">新&nbsp;&nbsp;手&nbsp;&nbsp;注&nbsp;&nbsp;册</Link>
                <div className="other_login">
                    <div className="other"></div>
                    <span>其他方式登录</span>
                    <div className="other"></div>
                </div>
                <div className="other_choose">
                    <a href="">
                        <i className="iconfont icon-qq"></i>
                    </a>
                    <a href="">
                        <i className="iconfont icon-nickname"></i>
                    </a>
                    <a href="">
                        <i className="iconfont icon-weibo"></i>
                    </a>
                </div>
            </div>
        )
    }
}
