import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './index.css';

//歌单封面和歌单创建者信息，可复用

export default class SongListsCover extends Component {
  constructor() {
    super();
      console.log(this.props.PlayList,1111);
  }

  render() {
    return (
      <div className="songlists-title">
        <div className="songlists-avater">
          <img src={} alt=""/>
        </div>
        <div className="songlists-name">
          <span>华语Future Bass,清新跳动的美妙旋律</span>
          <div className="songlists-author">
            <i className="author-avater"></i>
            <span className="author-name">LalisaManoban</span>
          </div>
        </div>
      </div>
    )
  }
}
