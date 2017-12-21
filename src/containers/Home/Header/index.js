import React, {Component} from 'react';
import "./index.css"
import  {Link} from "react-router-dom"
export default class Header extends Component {
    render() {
        return (
            <div className="header">
              <i className="iconfont icon-maikefeng1" >
                </i>
                <i className="iconfont icon-yinle">

                </i>
                <div className="headerBox">
                    <Link to="/search"><input className="inputBox" type="text" placeholder="搜索音乐、歌词、视频、电台" /></Link>
                </div>
            </div>
        )
    }
}



