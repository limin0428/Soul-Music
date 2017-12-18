import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css'
export default class Reg extends Component {

  render() {
    return (
        <div className="register">
            <div className="regTop">
                <span>用户注册</span>
                <Link className="back iconfont icon-fanhui2" to="./login"></Link>
            </div>
            <div className="content">
                <div className="point">
                    <span>注册成功后，手机号也可为登录账号。</span>
                </div>
                <form action="">
                    <ul className="message">
                        <input type="tel" placeholder="输入手机号" pattern="[0-9]{11}" required/>
                        <input type="username" placeholder="输入用户名" pattern="[0-9A-Za-z]{6,25}" required/>
                        <input type="password" placeholder="请输入6-25位密码" pattern="[0-9A-Za-z]{6,25}" required/>
                        <input type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
                        <input type="text" placeholder="输入验证码" pattern="[0-9]{6}" required/>
                        <div className="icons">
                            <b className="iconfont icon-shouji54"></b>
                            <b className="iconfont icon-yonghuming"></b>
                            <b className="iconfont icon-mima"></b>
                            <b className="iconfont icon-mima"></b>
                            <b className="iconfont icon-yanzhengma"></b>
                        </div>
                        <a className="code" href="javaScript:;" required>获取验证码</a>
                    </ul>
                    <div className="agree">
                        <input type="checkbox"/><span>&nbsp;同意&nbsp;</span><a href="javaScript:;">《注册协议》</a>
                    </div>
                    <button className="submit" type="submit">注册</button>
                </form>
            </div>
        </div>
    )
  }
}

