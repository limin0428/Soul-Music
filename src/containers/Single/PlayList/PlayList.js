import React,{Component} from 'react';
import './PlayList.css'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import actions from "../../../store/actions/playList";
 class PlayList extends Component{

    componentDidMount(){
        // this.props.fetchGetSong(/id=(\d+)/.exec(window.location.hash)[1]);
    }
    componentDidUpdate(){
        // if(this.props.playList.tracks){
        //     this.props.handleChangeSong(0)
        // }

     }
     handleDelSong=(e,id)=>{
        e.preventDefault();
         this.props.playList.tracks.filter((item)=>item.id!==id)
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
                        <span className='play-listClear iconfont icon-lajixiang1'> </span>
                    </div>
                    <ul className='play-listBody'>
                        {
                        this.props.playList.tracks.map((item,index)=>(
                                <Link to={`/single?id=${item.id}` } key={index} onClick={()=>{this.props.handleChangeSong(index||0);this.props.fetchGetSong(/id=(\d+)/.exec(window.location.hash)[1]) }}>
                                    <li className='play-listContent' >
                                        <span>{item.ar[0].name}</span>
                                        <span>-</span>
                                        <span>{item.name}</span>
                                        <span className='play-listDel' onClick={this.handleDelSong}>×</span>
                                    </li>
                                </Link>
                           ))
                        }
                        {
                            // this.state.PlayListData.tracks.map((item,index)=>{
                            //     <li className='play-listContent' key={index}>
                            //         <span>{item.ar[0].name}</span>
                            //         <span>-</span>
                            //         <span>{item.name}</span>
                            //         <span className='play-listDel'>×</span>
                            //     </li>
                            // })
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