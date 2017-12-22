import React,{Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';
import Tab from '../../../../components/Tab'
import {connect} from 'react-redux';
import actions from "../../../../store/actions/playList";
class NewMusicList extends Component{
  componentDidMount(){
    this.props.fetchNewMusicList();
  };
  componentDidUpdate(){
    console.log(this.props.playList.albums);
  }
    render(){
        return (
            <div className="newmusic">
                <Tab title="新碟上架"/>
                <div className="newmusic-title"><span>本周新碟</span></div>
                <div className="song-view">
                  <SongView albums={this.props.playList.albums}/>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state,
    actions
)(NewMusicList)