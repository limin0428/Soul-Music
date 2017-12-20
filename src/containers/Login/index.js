import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from "../../store/actions/session";
import Alert from '../../components/Alert/'
 class Login extends Component {
    rendleLogin=()=>{
        let username=this.username.value;
        let password=this.password.value;
        this.props.login({username,password})
    }
    render() {
        return (
         <div>
             <div id="login"></div>
             <div className="login_bg">

                 <div id="logo">
                     <img src={require('../../images/logo.png')}/>
                 </div>
                 <form action="">
                     <div className="userName">
                         <label htmlFor="username">用户名：</label>
                         <input
                             ref={input=>this.username=input}

                             type="text"  placeholder="请输入用户名" pattern="[0-9A-Za-z]{6,16}" required/>
                     </div>
                     <div className="passWord">
                         <label htmlFor="password">密&nbsp;&nbsp;码：</label>
                         <input
                             ref={input=>this.password=input}
                             type="password"  placeholder="请输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
                     </div>
                     <div className="choose_box">
                         <div>
                             <input type="checkbox" name="checkbox"/>
                             <span>记住密码</span>
                         </div>
                         <a href="javaScript:;">忘记密码</a>
                     </div>
                     <button
                         onClick={this.rendleLogin}
                         className="login_btn" type="submit">登&nbsp;&nbsp;录</button>
                     <Link className="reg_btn" to="./reg">前去注册</Link>
                 </form>

                 <div className="other_login">
                     <div className="other"></div>
                     <span>其他方式登录</span>
                     <div className="other"></div>
                 </div>
                 <div className="other_choose">
                     <a href="javaScript:;">
                         <img src={require('../../images/qq.png')}/>
                     </a>
                     <a href="javaScript:;">
                         <img src={require('../../images/wx.png')}/>
                     </a>
                     <a href="javaScript:;">
                         <img src={require('../../images/wb.png')}/>
                     </a>
                 </div>
                 <Alert/>
             </div>
             <Alert/>
         </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(Login)
