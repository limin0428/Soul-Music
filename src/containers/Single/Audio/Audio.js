import React,{Component} from 'react';
export default class Audio extends Component{
    render(){
        return (
                <audio src={this.props.songUrl} >
                </audio>
        )
    }
}
