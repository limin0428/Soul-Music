import React,{Component} from 'react';
export default class Audio extends Component{

componentDidUpdate(){
    if (this.props.isPlay) {
        this.audio.play()
    }else{
        this.audio.pause();
    }

}
    render(){
        return (
                <audio ref={audio=>this.audio=audio} src={this.props.songUrl} autoPlay={false}>
                </audio>
        )
    }
}
