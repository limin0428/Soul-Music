import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less'
import HomeSlider1 from "./HomeSlider1/index";
export default class HomeBody extends Component{
    render(){
      return (
          <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
            <div className="home-swiper">
              <HomeSlider1/>
              什么？？
            </div>
            <div className="home-swiper">PANE 2</div>
            <div className="home-swiper">PANE 3</div>
          </ReactSwipe>
      );
    }
}