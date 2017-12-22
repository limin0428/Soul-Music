import React, {Component} from 'react';
import './index.css';

import {Link} from 'react-router-dom';
import {getMvFirst, getMvInfo} from '../../../api/home'

export default class VideoPage extends Component {
    constructor() {
        super();
        this.state = {video: [], videoInfo: []}

    }

    componentDidMount() {
        getMvFirst().then(res => {
            this.setState({video: res.data});
        });
    }

    render() {
        return (
            <div className="video_demo">
                <div className="video_cover">
                    <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg?param=200y200"
                         alt=""/>
                </div>
                <div className="video_page">
                    <div>
                        <div className="video_title">
                            <img
                                src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg?param=200y200"
                                className="video_up_img" alt=""/>
                            <p className="video_up_title">他们把青春给了音乐</p>
                        </div>
                        <div className="video_dis">
                            <div className="time">发布：2017-10-12</div>
                            <div className="time video_s">|</div>
                            <div className="time">发布：2017-10-12</div>
                        </div>
                        <div className="video_size">他们把青春给了音乐,他们把青春给了音乐</div>
                    </div>
                    <div className="classification">
                        <span>相关推荐&nbsp;&nbsp;&gt;</span>
                    </div>
                    <div className="video_t_video">
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                        <div className="video_item">
                            <div className="video_min">
                                <img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg"
                                     alt=""/>
                                <div className="ico_video">啊123151</div>
                            </div>
                            <div className="video_min_list">他们把青春给了音乐,他们把青春给了音乐</div>
                            <div className="video_min_list_bot">07:22&nbsp;by&nbsp;他们把青春给了音乐</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
