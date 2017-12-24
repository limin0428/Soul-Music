import React,{Component} from 'react';
import './Progress.css'
import Audio from "../Audio/Audio";
export default class Progress extends Component{
    timeConvert=(timestamp)=>{
        var minutes = Math.floor(timestamp / 60);
        var seconds = Math.floor(timestamp - (minutes * 60));

        if(seconds < 10) {
            seconds = '0' + seconds;
        }

        timestamp = minutes + ':' + seconds;
        return timestamp;
    }

    handleTouch=(e)=>{
        let nowTime=(e.targetTouches[0].pageX-e.target.offsetLeft)/(e.target.offsetWidth)*this.props.currentTolTime;
        this.props.handleChangeProgress(nowTime);

    }

    render(){
        return (
            <div>
                <div className="music-progress">
                    <div className="current">{this.timeConvert(this.props.currentTime)}</div>
                    <div className="timeLine"  onTouchStart={this.handleTouch}>
                        <span className='progress-line' style={this.props.currentTime>this.props.currentTolTime?{display:"none"}:{width:this.props.currentTime/this.props.currentTolTime*100+'%',display:"block"}}> </span>
                    </div>
                    <div className="duration">{this.timeConvert(this.props.currentTolTime)}</div>
                </div>
            </div>
        )
    }
}
