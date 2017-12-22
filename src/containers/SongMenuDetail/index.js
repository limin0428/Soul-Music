import React, {Component} from 'react';
import './index.css';
import SongLists from '../../components/SongLists/index';
import SongListsBar from '../../components/SongListsBar/index';
import {getSongMenuDetail} from '../../api/home';
import Tab from '../../components/Tab/index'
export default class SongMenuDetail extends Component {
    constructor() {
        super();
        this.state = {music: {}, style: {}, gd:[],url:''}
    }
    componentDidMount() {
        let url=window.location.href;
        let id = /id=(\d+)/.exec(window.location.hash)[1];
        this.setState({gd:id});
        getSongMenuDetail(id).then(res => {
            this.setState({music: res,url});
        });
    }
    render() {
        return (
            this.state.music.code ? <div className="musica">
                <div className="containers">
                    <Tab title="歌单"/>
                    <div className="container_bg"  style={{background: `url(${this.state.music.playlist.coverImgUrl}) center`, opacity: .8}}>
                    </div>
                    <div className="detail-header">
                        <div className="songlists-title">
                            <div className="songlists-avater">
                                <img src={this.state.music.playlist.coverImgUrl} alt=""/>
                            </div>
                            <div className="songlists-name">
                                <span>{this.state.music.playlist.name}</span>
                                <div className="songlists-author">
                                    <div className="author-avater">
                                        <img src= {this.state.music.playlist.creator.avatarUrl} alt=""/>
                                    </div>
                                    <span className="author-name">{this.state.music.playlist.creator.nickname}</span>
                                </div>
                            </div>
                        </div>
                        <div className="songlists-detail">
                            {this.state.music.playlist.description}
                        </div>
                    </div>
                    <div className="detail-main">
                        <SongListsBar/>

                        <SongLists gd={this.state.gd}  tracks={this.state.music.playlist.tracks}/>
                    </div>
                </div>
            </div> : null
        )
    }
}
