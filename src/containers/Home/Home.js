import React,{Component} from 'react';
import Carousel from "./Sliders/index.js";
import Header from "./Header/index";
import HeaderBtn from "./HeaderBtn/index";
import SongList from "./SongList/index";
import './Home.css';
export default class Home extends Component{
    render(){
        return (
            <div className="home">
                <Header/>
                <Carousel/>
                <HeaderBtn />
                <SongList/>
            </div>
        )
    }
}

