
import {Link} from 'react-router-dom'
import React, {Component} from 'react';
import './index.css'
export default class NavLeft extends Component {
    render() {
        return (
            <ul className="navLeft">
                <li className="user">
                    <Link to="/personalcenter">
                        <img src={require('../../images/1.jpg')}/>
                    </Link>
                    <div><Link to="/logorreg">账号登录</Link></div>
                </li>
                <li className="
news">
                    <span><i className="iconfont icon-xinfeng"></i>我的消息</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-huiyuan"></i>会员中心</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-gouwu"></i>商城</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-xiangzi"></i>在线听歌免流量</span>
                </li>
                <li className="void">
                </li>
                <li>
                    <span><i  className="iconfont icon-pengyou"></i>我的好友</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-iconfontdingwei"></i>附近的人</span>
                </li>
                <li className="void">
                </li>
                <li>
                    <span><i className="iconfont icon-huanfu"></i>个性换肤</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-tinggeshiqu"></i>听歌识曲</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-icon2"></i>定时停止播放</span>
                </li>
                <li>
                    <span><i  className="iconfont icon-richscan_icon"></i>扫一扫</span>
                </li>
                <li>
                    <span><i className="iconfont icon-naozhong1"></i>音乐闹钟</span>
                </li>

                <li className="foot">
                    <span></span>
                </li>
                <li className="footer">
                    <span className="did"><i  className="iconfont icon-shezhi"></i>设置</span>
                    <span className="logout"><i  className="iconfont icon-tuichu"></i>退出</span>
                </li>
            </ul>
        )
    }
}