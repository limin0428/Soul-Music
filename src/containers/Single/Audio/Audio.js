import React,{Component} from 'react';
export default class Audio extends Component{
    componentDidMount(){
        let timer=setInterval(()=>{
            this.audio?this.props.handleGoTime(this.audio.currentTime): clearInterval(timer);
        }, 600);
    }
componentDidUpdate(){
    if (this.props.isPlay) {
        this.audio.play();
    }else{
        this.audio.pause();

    }
}

    render(){
        return (
            <iframe>
                <audio id='audio' ref={(audio)=>this.audio=audio} src={this.props.songUrl}  autoPlay={false} >
                </audio>
            </iframe>

        )
    }
}
