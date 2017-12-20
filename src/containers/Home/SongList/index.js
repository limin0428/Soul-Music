import React, {Component} from 'react';

import  "./index.css"
export default class SongList extends Component {
    render() {
        return (
            <div className="songBox">
                <div className="song-list">
                    <h3><i></i>推荐歌单 ></h3>
                    <div className="song-recommend">
                        <div className="list1">
                            <div className="list1_item">
                                <i className="iconfont icon-ermai"></i>
                                <span>646万</span>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list1">
                            <div className="list1_item">
                                <i className="iconfont icon-ermai"></i>
                                <span>646万</span>
                                <img src={require('../../../image/2.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list1">
                            <div className="list1_item">
                                <i className="iconfont icon-ermai"></i>
                                <span>646万</span>
                                <img src={require('../../../image/3.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list1">
                            <div className="list1_item">
                                <i className="iconfont icon-ermai"></i>
                                <span>646万</span>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list1">
                            <div className="list1_item">
                                <i className="iconfont icon-ermai"></i>
                                <span>646万</span>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list1">
                            <div className="list1_item">
                                <i className="iconfont icon-ermai"></i>
                                <span>646万</span>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                    </div>
                </div>


                <div className="song-list">
                    <h3><i></i>独家放送 ></h3>
                    <div className="song-recommends">
                        <div className="list2">
                            <div className="list2_item">
                                <i className="iconfont icon-wodedingdan"></i>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list2">
                            <div className="list2_item">
                                <i className="iconfont icon-wodedingdan"></i>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                    </div>
                    <div className="song-recommends">
                        <div className="list2">
                            <div className="list2_item">
                                <i className="iconfont icon-wodedingdan"></i>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                        <div className="list2">
                            <div className="list2_item">
                                <i className="iconfont icon-wodedingdan"></i>
                                <img src={require('../../../image/1.jpg')} alt=""/>
                            </div>
                            <div className="list-text">致郁后摇 堕入妄念的深渊</div>
                        </div>
                    </div>
                </div>




            </div>
        )
    }
}

