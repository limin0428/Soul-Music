import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
export default class LogOrReg extends Component {
    render() {
        return (
            <div className="login_bg">
                <div id="logo">
                    <img src={require('../../images/logo.png')}/>
                </div>
                <Link className="login_btn" to="./login">登&nbsp;&nbsp;录</Link>
                <Link className="login_btn" to="./reg">新&nbsp;&nbsp;手&nbsp;&nbsp;注&nbsp;&nbsp;册</Link>
                <div className="other_login">
                    <div className="other"></div>
                    <span>其他方式登录</span>
                    <div className="other"></div>
                </div>
                <div className="other_choose">
                    <a href="">
                        <img src={require('../../images/qq.png')}/>
                    </a>
                    <a href="">
                        <img src={require('../../images/wx.png')}/>
                    </a>
                    <a href="">
                        <img src={require('../../images/wb.png')}/>
                    </a>
                </div>
            </div>
        )
    }
}
