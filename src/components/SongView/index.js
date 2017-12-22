import React,{Component} from 'react';
import './index.css';
export default class SongView extends Component{
  componentDidUpdate(){
    console.log(this.props);
  }
    render(){
        return (
          <ul className="songview-lists">
            {
             this.props.albums.map((item,index)=>(
                 <li className="songview-list" key={index}>
                   <div className="songview-cover">
                     <div className="songview-img">
                       <img src={item.picUrl}/>
                     </div>
                     <div className="songview-demand">
                       <i className="iconfont icon-erji"></i>
                       <span>26万</span>
                     </div>
                     <div className="songview-author">
                       <i className="iconfont icon-ren"></i>
                       <span>LalisaManoban</span>
                     </div>
                   </div>
                   <p className="songview-title">
                     梦游仙境|{item.name}
                   </p>
                 </li>
             ))
            }

            {/* <li className="songview-list">
              <div className="songview-cover">
                <div className="songview-img">
                  <img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>
                </div>
                <div className="songview-demand">
                  <i className="iconfont icon-erji"></i>
                  <span>26万</span>
                </div>
                <div className="songview-author">
                  <i className="iconfont icon-ren"></i>
                  <span>LalisaManoban</span>
                </div>
              </div>
              <p className="songview-title">
                梦游仙境|坠入云端之上的歌声里
              </p>
            </li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
            {/*<li className="songview-list">*/}
              {/*<div className="songview-cover">*/}
                {/*<div className="songview-img">*/}
                  {/*<img src="http://p3.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=200y200" alt=""/>*/}
                {/*</div>*/}
                {/*<div className="songview-demand">*/}
                  {/*<i className="iconfont icon-erji"></i>*/}
                  {/*<span>26万</span>*/}
                {/*</div>*/}
                {/*<div className="songview-author">*/}
                  {/*<i className="iconfont icon-ren"></i>*/}
                  {/*<span>LalisaManoban</span>*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<p className="songview-title">*/}
                {/*梦游仙境|坠入云端之上的歌声里*/}
              {/*</p>*/}
            {/*</li>*/}
          </ul>
        )
    }
}
