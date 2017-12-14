import React,{Component} from 'react';
import MusicPlayerHeader from "../MusicPlayerHeader/MusicPlayerHeader";
import Control from "../Control/Control";
import Audio from "../Audio/Audio";
import MusicInfo from "../MusicInfo/MusicInfo";
const songUrl=require('../Audio/audio/5.mp3');
export default class MusicPlayer extends Component{

    render(){
        return (
            <div>
             <Audio songUrl={songUrl}/>
                    <MusicPlayerHeader/>
                <MusicInfo/>
                    <Control/>
            </div>

        )
    }
}
