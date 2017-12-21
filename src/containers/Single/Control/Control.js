import React,{Component} from 'react';
import './Control-icon.css'
import Progress from "../Progress/Progress";
import PlayList from "../PlayList/PlayList";
import Audio from "../Audio/Audio";
// const songUrl=require('../Audio/audio/demo.m4a');
export default class Control extends Component{
    constructor(){
        super();
        this.state={
            isPlay:false,
            isStart:true,
            isPlayList:false
        }
    }
    // handlePlay=()=>{
    //     this.setState({isPlay:!this.state.isPlay});
    // }
    handlePlayList=()=>(
       this.setState({isPlayList:!this.state.isPlayList})
    );
        render(){
        return (
           <div className='controls-main'>

               {/*<div className='controls-info'>*/}
               {/*</div>*/}
               {/*<Audio songUrl={songUrl}  isPlay={this.state.isPlay} />*/}
               <div className='controls-progress'>
                   <Progress currentTolTime={this.props.currentTolTime}
                             currentTime={this.props.currentTime}
                             handleGoTime={this.props.handleGoTime}
                             currentTrackIndex={this.props.currentTrackIndex}
                             handleChangeSong={this.props.handleChangeSong}
                             songUrl={this.props.songUrl}
                             handleChangeProgress={this.props.handleChangeProgress}
                   />
               </div>
               <div className="controls">
                   <span className="icon-next iconfont icon-xiayishou" onClick={this.props.handlePrev}> </span>

                   <span className={this.props.isPlay?' iconfont icon-zanting1 icon-pause':' iconfont icon-bofang icon-play'} onClick={this.props.handlePlay}>
                           </span>
                   <span className="icon-prev iconfont icon-shangxiayishou" onClick={this.props.handleNext}> </span>
               </div>
               <div className='controls-footer'>
                   <span className='icon-list iconfont icon-liebiao1' onClick={this.handlePlayList}> </span>
                   <span className='icon-left iconfont icon-xunhuan'> </span>
               </div>
               <div>
                   <PlayList handleChangeSong={this.props.handleChangeSong}
                       isPlayList={this.state.isPlayList}
                       handlePlayList={this.handlePlayList}
                       currentTrackIndex={this.props.currentTrackIndex}
                             itemIndex={this.props.itemIndex}
                   />
               </div>
           </div>

        )
    }
}