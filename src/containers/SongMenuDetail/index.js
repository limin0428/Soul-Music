import React, {Component} from 'react';
import './index.css';
import SongListsCover from '../../components/SongListsCover/index';
import SongLists from '../../components/SongLists/index';
import SongListsBar from '../../components/SongListsBar/index';
import SongListsInfo from '../../components/SongListsInfo/index';

export default class SongMenuDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="detail-header">
          <SongListsCover/>
          <SongListsInfo/>
        </div>
        <div className="detail-main">
          <SongListsBar/>
          <SongLists/>
        </div>
      </div>
    )
  }
}
