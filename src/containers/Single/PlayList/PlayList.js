import React,{Component} from 'react';
import './PlayList.css'

export default class PlayList extends Component{

    componentDidMount(){

    }
    render(){
        return (
            <div>
                <div className='play-list' style={this.props.isPlayList?{display:'block'}:{display:'none'}}>
                    <div className='play-listBg'> </div>
                    <div className='play-listBgMark'> </div>
                    <div className='play-listHead'>
                       <h1 className='play-listName'>歌曲列表
                       <span>(1)</span>
                       </h1>
                        <span className='play-listClear iconfont icon-lajixiang1'> </span>
                    </div>
                    <ul className='play-listBody'>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>
                        <li className='play-listContent'>
                            <span>薛之谦</span>
                            <span>-</span>
                            <span>背过手</span>
                            <span className='play-listDel'>×</span>
                        </li>

                    </ul>
                    <div className='play-listFooter' onClick={this.props.handlePlayList}>
                        <span className='play-off'>关闭</span>
                    </div>
                </div>
            </div>
        )
    }
}
