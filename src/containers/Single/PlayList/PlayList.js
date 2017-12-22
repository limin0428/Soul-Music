import React,{Component} from 'react';
import './PlayList.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import actions from "../../../store/actions/playList";
 class PlayList extends Component{
constructor(){
    super();
    this.state={num:0}
}
    componentDidMount(){


        // this.props.fetchGetSong(/id=(\d+)/.exec(window.location.hash)[1]);
    }
    componentDidUpdate(){

        // if(this.props.itemIndex==0){
        //     this.props.handleChangeSong(0)
        // }

     }
     removeAll=()=>{
        this.setState({num:0});
         console.log(this.props.playList.tracks);
         this.props.playList.tracks=[];
         console.log(this.props.playList.tracks);
         console.log(this.props);
         this.props.handlePouse();
     }

     handleDelSong=(item)=>{

      let id= /id=(\d+)/.exec(window.location.hash)[1];
         this.props.playList.tracks=this.props.playList.tracks.filter((item)=>item.id!=id)
     }
    render(){
        return (
            <div>
                <div className='play-list' style={this.props.isPlayList?{display:'block'}:{display:'none'}}>
                    <div className='play-listBg'> </div>
                    <div className='play-listBgMark'> </div>
                    <div className='play-listHead'>
                       <h1 className='play-listName'>歌曲列表
                       <span>({this.props.playList.tracks.length})</span>
                       </h1>
                        <span className='play-listClear iconfont icon-lajixiang1' onClick={this.removeAll}> </span>
                    </div>
                    <ul className='play-listBody'>
                        {
                            this.props.playList.tracks.length>0?
                                this.props.playList.tracks.map((item,index)=>(
                                <li className='play-listContent' key={index}>
                                    <Link to={`/single?id=${item.id}` }>
                                        <div onClick={()=>{this.props.handleChangeSong(index||0);this.props.fetchGetSong(/id=(\d+)/.exec(window.location.hash)[1]) }}>
                                            <span>{item.ar[0].name}</span>
                                            <span>-</span>
                                            <span>{item.name}</span>
                                        </div>
                                        <span className='play-listDel' onClick={()=>this.handleDelSong(item)}>×</span>
                                    </Link>
                                </li>
                            )):null
                        }
                    </ul>
                    <div className='play-listFooter' onClick={this.props.handlePlayList}>
                        <span className='play-off'>关闭</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state=>state,
    actions
)(PlayList)