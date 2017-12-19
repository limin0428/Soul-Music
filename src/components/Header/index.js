import React,{Component} from 'react';
import './index.css';
export default class Header extends Component{
    render(){
        return (
            <div className="header">
                <span>音乐</span>
                <span>视频</span>
                <span>电台</span>
            </div>
        )
    }
}