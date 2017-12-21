import React, {Component} from 'react';
import './index.css';
// import MenuLink from '../MenuLink'
export default class HeaderBtn extends Component {
    render() {
        return (
            <div className="fontBox">
                <div className="font">
                    <div className="music">
                        <i className="iconfont icon-icon-"></i>
                    </div>

                    <div className="radio">
                        <i className="iconfont icon-leguansirendiantai"></i>
                    </div>

                    <div className="video">
                        <i className="iconfont icon-shipin"></i>
                    </div>
                </div>
                <div className="headerBtnBox">
                    <a className="active" href="javaScript:;">音乐</a>
                    <a href="javaScript:;">电台</a>
                    <a href="javaScript:;">视频</a>
                </div>
            </div>

        )
    }
}

