import React, {Component} from 'react';
<<<<<<< HEAD
import  {Link} from "react-router-dom"
import  "./index.css"
export default class SongList extends Component {
    constructor(){
        super();
        this.state={}
    }
=======

import  "./index.css"
export default class SongList extends Component {
>>>>>>> zz
    click = (id) =>{
        let PlayListId = id;
    };
    render() {
<<<<<<< HEAD
        let arr = this.props.PlayList || [];

        return (
            <div className="songBox">
                <div className="song-list">
                    <h3><i> </i>推荐歌单 ></h3>
                    <div className="song-recommend">
                        {
                            arr.map(item=>(
                                <Link to={`/songmenudetail?id=${item.id}`} key={item.id} >
                                    <div className="list1" onClick={this.click(item.id)}>
                                        <div className="list1_item">
                                            <i className="iconfont icon-ermai"></i>
                                            <span>{item.playCount.toString().substring(0,3)}万</span>
                                            <img src={item.coverImgUrl}/>
                                        </div>
                                        <div className="list-text">{item.name}</div>
                                    </div>
                                </Link>
=======
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
>>>>>>> zz
                            ))
                        }
                    </div>
                </div>
                <div className="song-list">
<<<<<<< HEAD
                    <h3><i> </i>独家放送 ></h3>
=======
                    <h3><i></i>独家放送 ></h3>
>>>>>>> zz
                    <div className="song-recommends">
                        {
                            this.props.Mv.map(item => (
                                <div className="list2" key={item.id}>
                                    <div className="list2_item">
<<<<<<< HEAD
                                        <i className="iconfont icon-wodedingdan">{item.playCount}</i>
=======
                                        <i className="iconfont icon-wodedingdan"></i>
>>>>>>> zz
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

