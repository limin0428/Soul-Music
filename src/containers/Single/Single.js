import React,{Component} from 'react';
import MusicPlayerHeader from "./MusicPlayerHeader/MusicPlayerHeader";
import Control from "./Control/Control";
import Audio from "./Audio/Audio";
import MusicInfo from "./MusicInfo/MusicInfo";
import actions from "../../store/actions/playList";
import {connect} from 'react-redux'
class Single extends Component {
    constructor() {
        super();
        this.state = {
            songName:"",
            singleName:'',
            songUrl:"",
            picUrl:"",
            isPlay: false,
            currentTrackLen:0,
            currentTrackIndex:0,//当前歌曲索引
            currentTime: 0,//当前时间
            currentTolTime: 0,//总时间
            currentSongID:0,//歌曲id
        }
    }

    handleGoTime=(time)=>{
            this.setState({currentTime:time})}
    timeConvert=(timestamp)=>{
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
    handleChangeProgress=(nowtime)=>{
        this.setState({currentTime:nowtime})
    };
    itemIndex=0;
    handleChangeSong=(index)=>{
        this.itemIndex=index;
        this.props.fetchGetSong(/id=(\d+)/.exec(window.location.hash)[1]);
        console.log(this.itemIndex);
        if(this.props.playList.tracks.length>0){
            this.setState({isPlay:true,
                currentTrackLen:this.props.playList.tracks.length,
                picUrl:this.props.playList.tracks[this.itemIndex].al.picUrl,
                songUrl:this.props.playList.SongData[0].url,
                currentSongID:this.props.playList.tracks[this.itemIndex].id,
                songName:this.props.playList.tracks[this.itemIndex].name,
                singleName:this.props.playList.tracks[this.itemIndex].ar[0].name,
            });
            console.log("歌单里id",this.state.currentSongID,"歌曲id",this.props.playList.SongData[0].id);
        }
    };

    handleNext=()=>{
        if (this.itemIndex<this.props.playList.tracks.length-1){
            this.handleChangeSong(this.itemIndex+1)
        }else{
            this.setState({isPlay:false})
        }
    }
    handlePrev=()=>{
        if (this.itemIndex>0){
            this.handleChangeSong(this.itemIndex-1)
        }
    }
    componentDidMount(){
        this.props.fetchPlayList(156934569);
        this.props.fetchGetSong(/id=(\d+)/.exec(window.location.hash)[1]);
    }
    componentDidUpdate(){
        if(this.state.currentTime>this.state.currentTolTime){
            console.log("进啦");
            this.handleNext()
        }
    }
    render(){
        return (
            <div>
                <Audio
                    songUrl={this.state.songUrl}
                    isPlay={this.state.isPlay}
                    currentTolTime={this.state.currentTolTime}
                    currentTime={this.state.currentTime}
                    handleGoTime={this.handleGoTime}
                    handleChangeProgress={this.handleChangeProgress}
                />
                    <MusicPlayerHeader
                        songName={this.state.songName}
                        singleName={this.state.singleName}/>
                <MusicInfo isPlay={this.state.isPlay}
                           picUrl={this.state.picUrl}
                           currentTrackIndex={this.state.currentTrackIndex}
                           itemIndex={this.itemIndex}

                />
                    <Control isPlay={this.state.isPlay}
                             handlePlay={this.handlePlay}
                             handleChangeSong={this.handleChangeSong}
                             currentTolTime={this.state.currentTolTime}
                             currentTime={this.state.currentTime}
                             handleGoTime={this.handleGoTime}
                             handleChangeProgress={this.handleChangeProgress}
                             handleNext={this.handleNext}
                             handlePrev={this.handlePrev}
                             itemIndex={this.itemIndex}
                             currentSongID={this.state.currentSongID}
                    />
            </div>
        )
    }
}
export default connect(
    state=>state,
   actions
)(Single)