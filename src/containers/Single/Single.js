import React,{Component} from 'react';
import MusicPlayerHeader from "./MusicPlayerHeader/MusicPlayerHeader";
import Control from "./Control/Control";
import Audio from "./Audio/Audio";
import MusicInfo from "./MusicInfo/MusicInfo";
import actions from "../../store/actions/playList";
import {connect} from 'react-redux'
// const songUrl=require('./Audio/audio/demo.m4a');
class Single extends Component {
    constructor() {
        super();
        this.state = {
            songName:"",
            singleName:'',
            songUrl:"",
            picUrl:"",
            isPlay: false,
            currentTime: 0,//当前时间
            currentTolTime: 0,//总时间
        }
    }
    componentWillMount(){
        this.props.fetchPlayList();
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
    handleChangeSong=(index)=>{
        this.setState({isPlay:true,
        picUrl:this.props.playList.tracks[index].al.picUrl,
            songUrl:this.props.playList.tracks[index].song.url,
            songName:this.props.playList.tracks[index].ar[0].name,
            singleName:this.props.playList.tracks[index].name,
        });

    }
    handleGoNext=(index)=>{
         index++,
            this.handleChangeSong(index)
    }
    render(){
        return (
            <div>
             <Audio songUrl={this.state.songUrl} isPlay={this.state.isPlay} currentTolTime={this.state.currentTolTime} currentTime={this.state.currentTime} />
                    <MusicPlayerHeader songName={this.state.songName} singleName={this.state.singleName}/>
                <MusicInfo isPlay={this.state.isPlay}  picUrl={this.state.picUrl}/>
                    <Control isPlay={this.state.isPlay}
                             handlePlay={this.handlePlay}
                             handleChangeSong={this.handleChangeSong}
                             handleGoNext={this.handleGoNext}
                    />
            </div>


        )
    }
}
export default connect(
    state=>state,
   actions
)(Single)