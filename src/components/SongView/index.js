
import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

export default class SongView extends Component {
    render() {
        let arr = this.props.personalized || [];
        return (
            <ul className="songview-lists">
                {
                    arr.map((item, index) => (

                        <li className="songview-list" key={item.id}>
                            <Link to={`/single?id=${item.id}`}>
                                <div className="songview-cover">
                                    <div className="songview-img">
                                        <img src={item.song.album.blurPicUrl} alt=""/>
                                    </div>
                                    <div className="songview-demand"> </div>
                                    <div className="songview-author"> </div>
                                </div>
                                <p className="songview-title">
                                    {item.name}
                                </p>
                            </Link>
                        </li>

                    ))
                }

            </ul>
        )
    }
}
