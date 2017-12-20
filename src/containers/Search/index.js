import React, {Component} from 'react';
import "./index.css"
import  {Link} from  "react-router-dom";
export default class Search extends Component {
    render() {
        return (
            <div className="search-header">
                <Link to="/"> <span>取消</span></Link>
                <div className="search-headerBox">
                   <input className="search-inputBox" type="text" placeholder="搜索音乐、歌词、视频、电台" />
                </div>
            </div>
        )
    }
}


