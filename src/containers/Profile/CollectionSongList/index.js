import React,{Component} from 'react';
import './index.css'
export default class CollectionSongList extends Component{
    render(){
        return (
            <ul className="CollectionSongList">
                <li aria-current={true} className="list-item">歌单(1)</li>
                <li className="list-item-t">
                    <span className="i">
                        <i className="iconfont icon-paixing"></i>
                    </span>
                    <div className="ics">
                        <span className="ics-1">听歌排行</span><span className="ics-2">累计听歌0首</span>
                    </div>
                </li>
                <li className="list-item-t">
                    <span className="i">
                        <i className="iconfont icon-xihuan"></i>
                    </span>
                    <div className="ics ss">
                        <span className="ics-1">喜欢的音乐</span><span className="ics-2">0首，播放0次</span>
                    </div>
                </li>
            </ul>
        )
    }
}
