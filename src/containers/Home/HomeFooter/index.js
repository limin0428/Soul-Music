import React,{Component} from 'react';
import './index.less'
export default class HomeFooter extends Component{
  constructor(){
    super();
    this.state={isPlay:false,isShow:false,circulationWay:true}
  }
  handleClick=()=>{
    this.setState({isPlay:!this.state.isPlay})
  };
  changePlaySong=()=>{
    this.setState({circulationWay:!this.state.circulationWay})
  };
  changeShow=()=>{
    this.setState({isShow:!this.state.isShow})
  };
    render(){
      let showList=(
        <div className="home-song-list">
          <div className="song-list1">
              {
                this.state.circulationWay?
                    <div className="home-loop-list">
                      <i className="iconfont icon-shunxuxunhuan" onClick={this.changePlaySong}>
                    </i>
                      <span>循环播放</span>
                    </div>
                    :<div className="home-loop-list">
                      <i className="iconfont icon-danquxunhuan" onClick={this.changePlaySong}>
                    </i>
                      <span>单曲循环</span></div>
              }
            <div className="home-loop-list home-loop-list-right">
              <i className="iconfont icon-ic_folder_special_px"></i>
              <span>收藏全部</span>
              <i className="iconfont icon-shanchu"></i>
            </div>
          </div>
          <div className="home-songs-box">
            <ul className="home-songs">
              <li className="home-song">
                <p><span>刚好遇到你</span><span>—李玉刚</span></p>
                <i className="iconfont icon-guanbi"></i>
              </li>
              <li className="home-song">
                <p><span>刚好遇到你</span><span>—李玉刚</span></p>
                <i className="iconfont icon-guanbi"></i>
              </li>
              <li className="home-song">
                <p><span>刚好遇到你</span><span>—李玉刚</span></p>
                <i className="iconfont icon-guanbi"></i>
              </li>
              <li className="home-song">
                <p><span>刚好遇到你</span><span>—李玉刚</span></p>
                <i className="iconfont icon-guanbi"></i>
              </li>
              <li className="home-song">
              <p><span>刚好遇到你</span><span>—李玉刚</span></p>
              <i className="iconfont icon-guanbi"></i>
            </li>
              <li className="home-song">
              <p><span>刚好遇到你</span><span>—李玉刚</span></p>
              <i className="iconfont icon-guanbi"></i>
            </li>
              <li className="home-song">
                <p><span>刚好遇到你</span><span>—李玉刚</span></p>
                <i className="iconfont icon-guanbi"></i>
              </li>
              <li className="home-song">
              <p><span>刚好遇到你</span><span>—李玉刚</span></p>
              <i className="iconfont icon-guanbi"></i>
            </li>
              <li className="home-song">
              <p><span>刚好遇到你</span><span>—李玉刚</span></p>
              <i className="iconfont icon-guanbi"></i>
            </li>
              <li className="home-song">
              <p><span>刚好遇到你</span><span>—李玉刚</span></p>
              <i className="iconfont icon-guanbi"></i>
            </li>
            </ul>
          </div>
          <p className="home-song-close" onClick={this.changeShow}>关闭</p>
        </div>
      );
        return (
            <div className="home-footer">
              <div className="home-song">
                <div>
                  <img src={require('../../../../images/fengmian.jpg')}/>
                </div>
                <div>
                  <p className="home-song-title">什么</p>
                  <p className="home-song-lyrics">这是为什么</p>
                </div>
              </div>
              {
                this.state.isShow?showList:null
              }
              <div className="home-icon">
                {this.state.isPlay?<i className="iconfont icon-zanting" onClick={this.handleClick}></i>:<i className="iconfont icon-bofang" onClick={this.handleClick}></i>}
                <i className="iconfont icon-liebiaoqingdan" onClick={this.changeShow}></i>
              </div>
            </div>
        )
    }
}