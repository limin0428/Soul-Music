import React,{Component} from 'react';
import MusicPlayerHeader from "./MusicPlayerHeader/MusicPlayerHeader";
import Control from "./Control/Control";
import Audio from "./Audio/Audio";
import MusicInfo from "./MusicInfo/MusicInfo";
const songUrl=require('./Audio/audio/demo.m4a');
export default class Single extends Component {
    constructor() {
        super();
        this.state = {
            isPlay: false,
            currentTime: 0,//当前时间
            currentTolTime: 0,//总时间
        }
    }


        timeConvert=(timestamp)=>{
        timestamp=this.audio.duration;
            var minutes = Math.floor(timestamp / 60);
            var seconds = Math.floor(timestamp - (minutes * 60));

            if(seconds < 10) {
                seconds = '0' + seconds;
            }

            timestamp = minutes + ':' + seconds;
            return timestamp;
        }

    handlePlay=()=>{
        this.setState({isPlay:!this.state.isPlay});
    }
    render(){
        return (
            <div>
             <Audio songUrl={songUrl}  isPlay={this.state.isPlay} currentTolTime={this.state.currentTolTime} currentTime={this.currentTime} />
                    <MusicPlayerHeader/>
                <MusicInfo isPlay={this.state.isPlay}/>
                    <Control isPlay={this.state.isPlay} handlePlay={this.handlePlay}/>
            </div>

        )
    }
}
