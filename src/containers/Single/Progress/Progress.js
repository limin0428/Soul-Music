import React,{Component} from 'react';
import './Progress.css'
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
    render(){
        return (
            <div>
                <div className="music-progress">
                    <div className="current">{this.timeConvert(this.props.currentTime)}</div>
                    <div className="timeLine">
                        <span className='progress-line' > </span>
                    </div>
                    <div className="duration">{this.timeConvert(this.props.currentTolTime)}</div>
                </div>
            </div>
        )
    }
}
