import React,{Component} from 'react';
import './Control-icon.css'
import Progress from "../Progress/Progress";
import PlayList from "../PlayList/PlayList";
export default class Control extends Component{
    constructor(){
        super();
        this.state={
            isPlay:false,
            isStart:false,
            isPlayList:false
        }
    }
    handleChangeStart=()=>{
        this.setState({isStart:!this.state.isStart});
    }
    handlePlayList=()=>(
       this.setState({isPlayList:!this.state.isPlayList})
    );
    componentDidUpdate(){

    }
        render(){
        return (
           <div className='controls-main'>
               <div className='controls-progress'>
                   <Progress currentTolTime={this.props.currentTolTime}
                             currentTime={this.props.currentTime}
                             handleGoTime={this.props.handleGoTime}
                             currentTrackIndex={this.props.currentTrackIndex}
                             handleChangeSong={this.props.handleChangeSong}
                             songUrl={this.props.songUrl}
                             handleChangeProgress={this.props.handleChangeProgress}
                             handleGetSong={this.props.handleGetSong}
                             handlePlay={this.props.handlePlay}

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
                   <span className={this.state.isStart?'icon-left iconfont icon-danquxunhuan':'icon-left iconfont icon-xunhuan'} onClick={this.handleChangeStart}> </span>

               </div>
               <div>
                   <PlayList handleChangeSong={this.props.handleChangeSong}
                       isPlayList={this.state.isPlayList}
                       handlePlayList={this.handlePlayList}
                       currentTrackIndex={this.props.currentTrackIndex}
                             itemIndex={this.props.itemIndex}
                             handleGetSong={this.props.handleGetSong}
                             handlePouse={this.props.handlePouse}
                   />
               </div>
           </div>

        )
    }
}
