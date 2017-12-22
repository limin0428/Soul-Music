import React,{Component} from 'react';
export default class Audio extends Component{
    componentDidMount(){

    }
componentDidUpdate(){
    if (this.props.isPlay) {
        // setInterval(()=>{
        //     this.props.handleGoTime(this.audio.currentTime)
        // }, 800);
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
