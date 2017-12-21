import React,{Component} from 'react';
import './index.less';
import {Link} from 'react-router-dom';
export default class HomeFooter extends Component{
  constructor(){
    super();
    this.state={isPlay:false,isShow:false,circulationWay:true}
  }
  handleClick=()=>{
    this.setState({isPlay:!this.state.isPlay})
  };
  changePlaySong=()=>{
    this.setState({circulationWay:!this.state.circulationWay})
  };
  changeShow=()=>{
    this.setState({isShow:!this.state.isShow})
  };
    render(){
        return (
            <div className="header-">
               <div>
                 <i></i>

               </div>
               <div>
                 <i></i>
                 <i></i>
               </div>
            </div>
        )
    }
}