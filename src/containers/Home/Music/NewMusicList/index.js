import React,{Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';
export default class NewMusicList extends Component{
    render(){
        return (
            <div className="newmusic">
                <div className="newmusic-title"><span>本周新碟</span></div>
                <SongView />
            </div>
        )
    }
}
