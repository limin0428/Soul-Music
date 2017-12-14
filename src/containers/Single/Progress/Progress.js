import React,{Component} from 'react';
import './Progress.css'
export default class Progress extends Component{
    render(){
        return (
            <div>
                <div className="progress">
                    <div className="current">00:00</div>
                    <div className="timeLine">
                        <span className='progress-line' ></span>
                    </div>
                    <div className="duration">00:00</div>
                </div>
            </div>
        )
    }
}
