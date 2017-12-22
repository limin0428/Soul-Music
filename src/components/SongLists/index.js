
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';
//歌曲列表，可复用
export default class SongLists extends Component {
    render() {
        let gd = this.props.gd;
        return (
            <div className="songlists">
                <ul>
                    {
                        this.props.tracks.slice(0,45).map((item,index)=>(

                            <Link to={`/single?gd=${gd}&id=${item.id}`}  key={item.id}>
                                <li>
                                    <div className="songlist-left">{index+1}</div>
                                    <div className="songlist">
                                        <p className="songlist-name">{item.name}</p>
                                        <p>{item.ar[0].name} - {item.al.name}</p>
                                    </div>
                                    <div className="songlist-icon">
                                        <i className="iconfont icon-sandian"></i>
                                    </div>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
