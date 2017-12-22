
import React, {Component} from 'react';
import './index.css'
export default class AboutMe extends Component {
    render() {
        return (
            <ul className="about">
                <li className="about-item-s"><i className="iconfont icon-shugang"></i>个人信息</li>
                <li className="about-item">等级&nbsp;:&nbsp; <i className="iconfont icon-lv0"></i></li>
                <li className="about-item">性别&nbsp;:&nbsp;男</li>
                <li className="about-item">地区&nbsp;:&nbsp;北京</li>
                <li className="about-item-v"></li>
                <li className="about-item-s"><i className="iconfont icon-shugang"></i>个人简介</li>
                <li className="about-item-p"><p>还没有填写个人介绍</p></li>
            </ul>
        )
    }
}

