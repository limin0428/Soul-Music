import React,{Component} from 'react';
import './index.less';
export default class SongMenuDetail extends Component{
    render(){
        return (
            <div>
              <div className="container">
                <div className="detail-header">
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
                  <div className="songlists-detail">
                    <ul>
                      <li className="collection">
                        <i></i>
                        <span></span>
                      </li>
                      <li className="comment">
                        <i></i>
                        <span></span>
                      </li>
                      <li className="download">
                        <i></i>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="detail-main">
                  <div className="songlists-bar"></div>
                  <div className="songlists">
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}
