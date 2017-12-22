import  React from 'react';
import ReactSwipe from 'react-swipe';
import "./index.css";
export default class Carousel extends React.Component {
     constructor(){
         super();
         this.state={index:0}
     };
    render() {
        let swipeOptions = { startSlide: 0,
            speed: 1000,
            auto: 2000,
            effect : 'coverflow',
            slidesPerView: 0,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback:(index,elem)=>{
            this.setState({index})
        }};
        return (
            <div className="sliders">
                <ReactSwipe key={this.props.Sliders.length}  className="carousel" swipeOptions={ swipeOptions } >
                    {
                       this.props.Sliders.map((item,index)=>(
                            <img  className="cat" src={item.pic} key={index} alt=""/>
                        ))
                    }
                </ReactSwipe>
                <div className="dots" >
                    {
                        this.props.Sliders.map((item,index)=>(
                            <span className={'dot '+(this.state.index==index?'active':'')}
                                  key={'key' + index}>
                            </span>
                        ))
                    }
                </div>
            </div>
        );
    }
}
