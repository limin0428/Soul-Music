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
                    <li className='single-name'>薛之谦</li>
                    <li className='song-name'>背过手</li>
                </ul>
           </div>
        )
    }
}
