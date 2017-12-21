import React, {Component} from 'react';

import  "./index.css"
export default class SongList extends Component {
    click = (id) =>{
        let PlayListId = id;
    };
    render() {
        return (
            <div className="songBox">
                <div className="song-list">
                    <h3><i></i>推荐歌单 ></h3>
                    <div className="song-recommend">
                        {
                            this.props.PlayList.map(item=>(
                                <div className="list1" key={item.id} onClick={this.click(item.id)}>
                                    <div className="list1_item">
                                        <i className="iconfont icon-ermai"></i>
                                        <span>{item.playCount.toString().substring(0,3)}万</span>
                                        <img src={item.coverImgUrl}/>
                                    </div>
                                    <div className="list-text">{item.name}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="song-list">
                    <h3><i></i>独家放送 ></h3>
                    <div className="song-recommends">
                        {
                            this.props.Mv.map(item => (
                                <div className="list2" key={item.id}>
                                    <div className="list2_item">
                                        <i className="iconfont icon-wodedingdan"></i>
                                        <img src={ item.picUrl } />
                                    </div>
                                    <div className="list-text">{item.name}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

