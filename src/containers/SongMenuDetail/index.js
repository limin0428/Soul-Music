import React, {Component} from 'react';
import './index.css';
import SongLists from '../../components/SongLists/index';
import SongListsBar from '../../components/SongListsBar/index';
import {getSongMenuDetail} from '../../api/home';
import Tab from '../../components/Tab/index'
export default class SongMenuDetail extends Component {
    constructor() {
        super();

        this.state = {music: {}, style: {}, did:[]}

    }
    componentDidMount() {
        let id = /id=(\d+)/.exec(window.location.hash)[1];
        this.setState({did:id});
        getSongMenuDetail(id).then(res => {
            this.setState({music: res});
        });
    }
    render() {
        return (
            this.state.music.code ? <div className="musica">
                <div className="containers">
                    <div className="container_bg"  style={{background: `url(${this.state.music.playlist.coverImgUrl}) center`, opacity: .8}}></div>
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
                        <SongLists did={this.state.did}  tracks={this.state.music.playlist.tracks}/>
                    </div>
                </div>
            </div> : null
        )
    }

/*import SongListsCover from '../../components/SongListsCover/index';
import SongLists from '../../components/SongLists/index';
import SongListsBar from '../../components/SongListsBar/index';
import SongListsInfo from '../../components/SongListsInfo/index';

export default class SongMenuDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="detail-header">
          <SongListsCover />
          <SongListsInfo />
        </div>
        <div className="detail-main">
          <SongListsBar />
          <SongLists />
        </div>
      </div>
    )
  }*/

}
