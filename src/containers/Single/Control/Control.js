import React,{Component} from 'react';
import './Control-icon.css'
import Progress from "../Progress/Progress";
export default class Control extends Component{
    constructor(){
        super();
        this.state={
            isPlay:false,
            isStart:true,
        }
    }
    handlePlay=()=>{
        this.setState({isPlay:!this.state.isPlay})
    }
        render(){
        return (
           <div className='controls-main'>
               {/*<div className='controls-info'>*/}
               {/*</div>*/}

               <div className='controls-progress'>
                   <Progress/>
               </div>
               <div className="controls">
                   <span className="icon-next iconfont icon-xiayishou"></span>

                   <span className={this.state.isPlay?' iconfont icon-zanting1 icon-pause':' iconfont icon-bofang icon-play'} onClick={this.handlePlay}>
                           </span>
                   <span className="icon-prev iconfont icon-shangxiayishou"></span>
               </div>
               <div className='controls-footer'>
                   <span className='icon-list iconfont icon-liebiao1'></span>
                   <span className='icon-left iconfont icon-xunhuan'></span>
               </div>
           </div>

        )
    }
}
