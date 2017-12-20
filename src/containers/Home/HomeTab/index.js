import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './index.less'
export default class HomeTab extends Component{
    render(){
        return (
            <div className="tab">
              <div className="tab-home">
                <div className="tab-personal">
                  <Link to="/personalcenter">
                  <i className="iconfont icon-wodeyinyueliebiaomoshi24"></i>
                  </Link>
                </div>
                <div className="tab-list">
                  <i className="iconfont icon-yinle1"></i>
                  <Link to="/">
                  <i className="iconfont icon-yinle3 yinyue-home"></i>
                  </Link>
                  <i className="iconfont icon-huati"></i>
                </div>
                <div className="tab-search">
                  <Link to="/search">
                  <i className="iconfont icon-sousuo"></i>
                  </Link>
                </div>
              </div>
              <div className="tab-nav">
                <div>音乐</div>
                <div>视频</div>
                <div>电台</div>
              </div>
            </div>
        )
    }
}