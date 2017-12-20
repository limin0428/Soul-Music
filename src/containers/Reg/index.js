import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import {connect} from 'react-redux';
import actions from "../../store/actions/session";
import Alert from '../../components/Alert'

class Reg extends Component {
    handleReg = () => {
        let tel = this.tel.value;
        let username = this.username.value;
        let password = this.password.value;
        this.props.reg({tel, username, password});


    }

    render() {
        return (
            <div className="register">
                <div className="regTop">
                    <span>用户注册</span>
                    <Link className="back iconfont icon-fanhui2" to="./login"></Link>
                </div>
                <Alert/>
                <div className="content">
                    <div className="point">
                        <span>注册成功后，手机号也可为登录账号。</span>
                    </div>
                    <form action="">
                        <ul className="message">
                            <input ref={input => this.tel = input} type="tel" placeholder="输入手机号" pattern="[0-9]{11}" required/>
                            <input ref={input => this.username = input} type="username" placeholder="输入用户名"
                                   pattern="[0-9A-Za-z]{6,25}" required/>
                            <input ref={input => this.password = input} type="password" placeholder="请输入6-25位密码"
                                   pattern="[0-9A-Za-z]{6,25}" required/>
                            <input type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}"/>
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
                        <button
                            onClick={this.handleReg}
                            className="submit" type="submit">注册
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(Reg)
