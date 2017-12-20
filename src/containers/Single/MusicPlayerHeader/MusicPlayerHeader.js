import React,{Component} from 'react';
import './Header.css'
export default class MusicPlayerHeader extends Component{
    render(){
        return (
           <div className='MHeader'>
               <div className='MHeader-icon'>
                   <i className='iconfont icon-fanhui'></i>
               </div>
               <ul className='MHText'>
                    <li className='single-name'>{this.props.singleName}</li>
                    <li className='song-name'>{this.props.songName}</li>
                </ul>
           </div>
        )
    }
}
