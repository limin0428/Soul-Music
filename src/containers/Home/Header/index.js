import React, {Component} from 'react';
import "./index.css"
import  {Link} from "react-router-dom";
import NavLeft from '../../../containers/NavLeft/index';

export default class Header extends Component {
    constructor(){
        super();
        this.state={isShows:false}
    }
    handleClick=()=>{
        this.setState({isShows:!this.state.isShows});


    }
    render() {
        return (
            <div className="header">
              <i
                  onClick={this.handleClick}
                  className="iconfont icon-maikefeng1" >
                  {
                      this.state.isShows?<NavLeft state={this.state}/>:null
                  }
                </i>
                <i className="iconfont icon-yinle">

                </i>
                <div className="headerBox">
                    <Link to="/search"><input className="inputBox" type="text" placeholder="搜索音乐、歌词、视频、电台" /></Link>
                </div>
            </div>
        )
    }
}



