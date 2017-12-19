import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
export default class HomeBody extends Component{
  render(){
    let swipeOptions = {
      auto: 3000,//加载完成后等待多少毫秒开始轮播
      continuous: true,//是否启动无缝轮播
      callback: (index) => {
        this.setState({index});
      },//当动画完成后执行回调函数
    };
    return (
        <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
          <div className="slider1-swiper">
          每一天每一秒，我都喜欢你！
          </div>
          <div className="slider1-swiper">PANE 2</div>
          <div className="slider1-swiper">PANE 3</div>
        </ReactSwipe>
    );
  }
}