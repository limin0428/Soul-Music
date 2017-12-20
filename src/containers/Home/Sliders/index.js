import  React from 'react';
import ReactSwipe from 'react-swipe';
import "./index.css"
let ary=["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=410520989,2961789092&fm=27&gp=0.jpg",

    "http://p3.music.126.net/s25q2x5QyqsAzilCurD-2w==/7973658325212564.jpg",

    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1461631016,2577879865&fm=27&gp=0.jpg",

    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513094641705&di=7434c1cbee703b7125326d45cc98eb0d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fting%2Fpic%2Fitem%2Ff2deb48f8c5494ee33e1f53d2ff5e0fe98257ed7.jpg",

    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513689518&di=becf7979ae24c6cbc17bef9d85597dde&imgtype=jpg&er=1&src=http%3A%2F%2Fimages.rednet.cn%2Farticleimage%2F2015%2F10%2F19%2F15134982.png"



];
 export default class Carousel extends React.Component {
     constructor(){
         super();
         this.state={index:0}
     }
    render() {
        return (
            <div className="sliders">
                <ReactSwipe  className="carousel" swipeOptions={{ startSlide: 0,
                    speed: 1000,
                    auto: 2000,
                    effect : 'coverflow',
                    slidesPerView: 0,
                    continuous: true,
                    disableScroll: false,
                    stopPropagation: false,
                callback:(index,elem)=>{
                    this.setState({index})
                }}} >
                    {
                        ary.map((item,index)=>(
                            <img  className="cat" src={item} key={index} alt=""/>
                        ))
                    }
                </ReactSwipe>

                <div className="dots">
                    {
                        ary.map((item,index)=>(
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
