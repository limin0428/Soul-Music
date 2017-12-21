import React,{Component} from 'react';
export default class Audio extends Component{
    componentDidMount(){
            setInterval(()=>{
                this.props.handleGoTime(this.audio.currentTime)

            }, 800);

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
                <audio id='audio' ref={(audio)=>this.audio=audio} src={this.props.songUrl}  autoPlay={false} >
                </audio>
        )
    }
}
