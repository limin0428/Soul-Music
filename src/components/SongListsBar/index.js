import React,{Component} from 'react';
import './index.css';

//歌单横栏，可复用

export default class SongListsBar extends Component{
    render(){
        return (
            <div>
              <div className="songlists-bar">
                <div className="songlists-bar-left bar">
                  <i className="iconfont icon-bofang"></i>
                    <span>播放全部</span>
                </div>
                {/*<div className="songlists-bar-right bar">*/}
                  {/*<i className="iconfont icon-duoxuan"></i>*/}
                  {/*<span>多选</span>*/}
                {/*</div>*/}
              </div>
            </div>
        )
    }
}
