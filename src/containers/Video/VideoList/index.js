import React, {Component} from 'react';
import './index.css';

import {Link} from 'react-router-dom';
import {getMvFirst,getMvInfo} from '../../../api/home'

export default class VideoList extends Component {

    constructor() {
        super();
        this.state = {video: [],videoInfo:[]}

    }
    componentDidMount() {
        getMvFirst().then(res => {
            this.setState({video: res.data});
        });
    }
    render() {


        let videos = this.state.video || [];

        return (
            <div className="video_demo">
                {
                    videos.map((item,index)=>(
                        <div className="video_list" key={item.artistId}>
                            <div className="video_list_cover">
                                <Link to={`/videopage?id=${item.artistId}`}>
                                <img src={item.cover}/>
                                </Link>
                            </div>
                            <div className="video_list_pages">
                                <div>
                                    <Link to={`/videopage?id=${item.artistId}`}>
                                        <div className="video_size">{item.briefDesc}</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>
        )
    }
}
