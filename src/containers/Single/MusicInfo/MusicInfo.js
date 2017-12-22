import React, {Component} from 'react';
import './MusicInfo.css'
import {connect} from 'react-redux'
import actions from "../../../store/actions/playList";
class MusicInfo extends Component {
    constructor() {
        super();
        this.state = {
            isSong: false
        }
    }
    componentDidMount(){
        // this.props.fetchPlayList();
    }

    componentDidUpdate(){

}
    handleSong = () => {
        this.setState({isSong: !this.state.isSong})
    };
     reg=/\[\d{2}:\d{2}.\d{3}\]/g;
     regCn=/\]([^\x00-\xff]+)/g;
    musicInfo = () => (
        <div className='musicInfo'>
            <div className='musicInfo-middle'>
                <div className='musicInfo-pic'
                     style={this.props.isPlay ? {animationPlayState: "running"} : {animationPlayState: "paused"}}>
                    {/*<div className='music-picBg'></div>*/}
                    <img className='PicInfo'
                         src={this.props.picUrl}
                         alt=""/>
                </div>
            </div>
            <div className='music-collect'>
                           <span className='icon-collect iconfont icon-shoucang2'>

                           </span>
            </div>
        </div>
    );

    render() {
        return (
            <div className='music-main'>
                {
                    this.state.isSong ? <div className='music-lrc'>
                        <div className='music-sound'>
                   <span className='icon-sound iconfont icon-systemprompt'>
                   </span>
                            {/**/}                <span className='sound-line'>
                        </span>
                            <span className='sound-lineBg'>
                        </span>
                        </div>
                        <div className='song-lrc'>
                            <p>
                                找不到匹配歌词...
                            </p>
                            <p>
                                ...其实是不会写
                            </p>

                        </div>
                    </div> :
                    this.musicInfo()
                }
                <span className='go-lrc iconfont icon-zhuomiangeci' onClick={this.handleSong}> </span>
                <div className='music-bg'>
                    <img className="music-bgImg" src={this.props.picUrl} alt=""/>
                </div>
                <div className='music-bgMarkOne'></div>
                <div className='music-bgMark'>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state,
    actions
)(MusicInfo)
