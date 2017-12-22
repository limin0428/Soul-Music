import React, {Component} from 'react';
import Carousel from "./Sliders/index.js";
import Header from "./Header/index";
import HeaderBtn from "./HeaderBtn/index";
import SongList from "./SongList/index";
import './Home.css';
import {getSliders, getPlayList, getMv} from '../../api/home'
import HomeFooter from "./HomeFooter/index";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {Sliders: [], PlayList: [], Mv: []}
    }
    componentDidMount() {
        getSliders().then(res => this.setState({Sliders: res.banners})).catch(err => console.log(err));
        getPlayList().then(res => this.setState({PlayList: res.playlists})).catch(err => console.log(err));
        getMv().then(res =>this.setState({Mv: res.result})).catch(err => console.log(err));
    }
    render() {
        return (
            <div className="home">
                <Header/>
                <Carousel Sliders={this.state.Sliders}/>
                <HeaderBtn/>
                <SongList PlayList={this.state.PlayList} Mv={this.state.Mv} />
                <HomeFooter/>
            </div>
        )
    }
}

