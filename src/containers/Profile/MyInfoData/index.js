import React,{Component} from 'react';
import {connect} from 'react-redux';
import actions from "../../../store/actions/session";
import './index.css'
class MyInfoData extends Component{
    render(){
        return (
            <div className="MyInfoData">
                <div className="header-info">
                <i
                    onClick={()=>this.props.history.goBack()}
                    className="iconfont icon-fanhui"></i>
                    <span>个人详情</span>
                </div>
                <ul className="info-list">
                    <li className="info-item-s"><p>上传头像并完善个人信息，即可获得积分~</p></li>
                    <li  className="info-item-k"></li>
                    <li className="info-item-t">头像 <span><img src={require('../../../images/1.jpg')}/><i className="iconfont icon-jiantou"></i></span></li>
                    <li className="info-item">个人主页背景<span><img src={require('../../../images/black.jpg')}/><i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item">昵称<span>修改<i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item">性别<span>男 <i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item">二维码<span><i className="iconfont icon-erweima"></i><i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item-k"></li>
                    <li  className="info-item">生日<span>输入生日信息 <i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item">地区<span>北京 <i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item">大学<span>未填写 <i className="iconfont icon-jiantou"></i></span></li>
                    <li  className="info-item-k-w"><p> 此三项可以在"消息和隐私设置"中设置为隐私</p></li>
                    <li  className="info-item">介绍<span></span></li>
                    <li  className="info-item-g">个人介绍 ...<span>140</span></li>
                    <li  className="info-item-k"></li>
                    <li  className="info-item">账号和绑定设置 <span><i className="iconfont icon-jiantou"></i></span> </li>
                    <li  className="info-item">个人主页展示设置 <span> <i className="iconfont icon-jiantou"></i></span></li>
                </ul>
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(MyInfoData)
