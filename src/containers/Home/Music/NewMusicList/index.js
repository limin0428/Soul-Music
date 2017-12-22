    import React,{Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';
    import HomeTab from "../../../../components/HomeTab/index";
export default class NewMusicList extends Component{
    render(){
        return (
            <div className="newmusic">
                <HomeTab/>
                <div className="newmusic-title"><span>本周新碟</span></div>
                <div className="song-view">
                  <SongView />
                </div>
            </div>
        )
    }
}
