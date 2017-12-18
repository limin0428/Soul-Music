import React,{Component} from 'react';
import './MusicInfo.css'
export default class MusicInfo extends Component{
    constructor(){
        super();
        this.state={
            isSong:false
        }
    }
    handleSong=()=>{
        this.setState({isSong:!this.state.isSong})
}
   musicLic=()=>(
        <div className='music-lrc'>
            <div className='music-sound'>
                   <span className='icon-sound iconfont icon-systemprompt'>
                   </span>
                <span className='sound-line'>
                        </span>
            </div>
            <div className='song-lrc'>
                <p>除非放下心中的负累</p>
                <p>一切难以挽回</p>
                <p>你总爱让往事跟随</p>
                <p>怕过去白费</p>
            </div>
        </div>
    )
    musicInfo=()=>(
        <div className='musicInfo'>
            <div className='musicInfo-middle'>
               <div className='musicInfo-pic'>
                   <img className='PicInfo' src="https://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.jpg?max_age=2592000" alt=""/>
               </div>
            </div>
            <div className='music-collect'>
                           <span className='icon-collect iconfont icon-shoucang2'>

                           </span>
            </div>
        </div>
    )
    render(){
        return (
           <div className='music-main'>
               {
                 this.state.isSong?this.musicLic():this.musicInfo()
               }
               <span className='go-lrc iconfont icon-zhuomiangeci' onClick={this.handleSong}></span>
               <div className='music-bg'></div>
               <div className='music-bgMark'></div>
           </div>
        )
    }
}

