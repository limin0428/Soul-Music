import React,{Component} from 'react';
import './PlayList.css'
import {getPlayList} from '../../../api/player'
import {connect} from 'react-redux'
import actions from "../../../store/actions/playList";
 class PlayList extends Component{

    componentWillMount(){
        this.props.fetchPlayList();
      console.log(this.props);
    }
    componentDidUpdate(){
         if (this.props.itemIndex==0){
             this.props.handleChangeSong(0)
         }
     }
     changeSong=(id)=> {
         let nowSong= this.props.playList.tracks.find(item => item.id == id);
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
                                <li className='play-listContent' key={index} onClick={()=>this.props.handleChangeSong(index||0)}>
                                    <span>{item.ar[0].name}</span>
                                    <span>-</span>
                                    <span>{item.name}</span>
                                    <span className='play-listDel'>×</span>
                                </li>
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