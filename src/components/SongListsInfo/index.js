import React,{Component} from 'react';
import './index.css';

//歌单收藏、评论和下载，可复用

export default class SongListsInfo extends Component{
    render(){
        return (
          <div className="songlists-detail">
            <ul>
              <li className="collection">
                <i className="iconfont icon-addition"></i>
                <span></span>
              </li>
              <li className="comment">
                <i className="iconfont icon-pinglun"></i>
                <span></span>
              </li>
              <li className="download">
                <i className="iconfont icon-download"></i>
                <span></span>
              </li>
            </ul>
          </div>
        )
    }
}
