import React,{Component} from 'react';
import './index.css';
export default class SongListsCover extends Component{
    render(){
        return (
          <div className="songlists-title">
            <div className="songlists-avater">
              <img src="http://p1.music.126.net/2MsstS-M9w5-li0aRy3sUQ==/1380986606815861.jpg?param=140y140" alt=""/>
            </div>
            <div className="songlists-name">
              <span>华语Future Bass,清新跳动的美妙旋律</span>
              <div className="songlists-author">
                <i className="author-avater"></i>
                <span className="author-name">LalisaManoban</span>
              </div>
            </div>
          </div>
        )
    }
}
