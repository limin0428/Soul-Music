import React,{Component} from 'react';
import './Header.css'
import {withRouter} from 'react-router-dom'
class MusicPlayerHeader extends Component{
    render(){
        return (
           <div className='MHeader'>
               <div className='MHeader-icon'>
                   <i className='iconfont icon-fanhui' onClick={()=>this.props.history.goBack()}></i>
               </div>
               <ul className='MHText'>
                    <li className='single-name'>{this.props.singleName}</li>
                    <li className='song-name'>{this.props.songName}</li>
                </ul>
           </div>
        )
    }
}
export default withRouter(MusicPlayerHeader)