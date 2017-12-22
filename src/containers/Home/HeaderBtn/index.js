import React, {Component} from 'react';
import './index.css';
import  {Link} from "react-router-dom"
// import MenuLink from '../MenuLink'
export default class HeaderBtn extends Component {
    render() {
        return (
            <div className="fontBox">
                <div className="font">
                    <Link to="/reclist">
                        <div className="music">
                            <i className="iconfont icon-icon-"></i>
                        </div>
                    </Link>

                    <Link to="/rankinglist">
                        <div className="radio">
                            <i className="iconfont icon-leguansirendiantai"></i>
                        </div>
                    </Link>
                    <Link to="/video">
                        <div className="video">
                            <i className="iconfont icon-shipin"></i>
                        </div>
                    </Link>
                </div>
                <div className="headerBtnBox">
                    <Link to="/reclist" >新碟上架</Link>
                    <Link to="/rankinglist">排行榜</Link>
                    <Link to="/video">视频</Link>
                </div>
            </div>

        )
    }
}

