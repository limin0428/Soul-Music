import React, {Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';

export default class Recomment extends Component {
  render() {
    return (
      <div className="demo">
        <div className="cover">
          <div className="cover-img"><img src="http://p4.music.126.net/RRy487LJgRteVZnUPL-Ggg==/109951163087436693.jpg?param=200y200" alt=""/></div>
          <p className="cover-title">100位欧美90后歌手：他们把青春给了音乐</p>
        </div>
        <div className="classification">
          <span>全部歌单&nbsp;&nbsp;&gt;</span>
        </div>
        <SongView/>
      </div>
    )
  }
}
