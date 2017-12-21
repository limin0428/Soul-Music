import React,{Component} from 'react';
import{HashRouter as Router,Route} from 'react-router-dom';
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import LogOrReg from "./containers/LogOrReg/index";
import Profile from "./containers/Profile/index";
import createHashHistory from '../node_modules/history/createHashHistory';
import {ConnectedRouter} from 'react-router-redux'
import Home from "./containers/Home/Home";
import Search from "./containers/Search/index";
import Single from "./containers/Single/Single";
import NewMusicList from './containers/Home/Music/NewMusicList/index';
import RankingList from './containers/Home/Music/RankingList/index';
import Recommend from './containers/Home/Music/Recommend/index';
import SongMenuDetail from './containers/SongMenuDetail/index';
import './app.css';
import MyInfoData from "./containers/Profile/MyInfoData/index";
import CollectionSongList from "./containers/Profile/CollectionSongList/index";
import PersonalDynamic from "./containers/Profile/PersonalDynamic/index";
import AboutMe from "./containers/Profile/AboutMe/index";
let history =createHashHistory();
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/single" component={Single}/>
                    <Route path="/myinfo" component={MyInfoData}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/profile/PersonalDynamic" component={PersonalDynamic}/>
                    <Route path="/profile/AboutMe" component={AboutMe}/>
                    <Route path="/profile/CollectionSongList" component={CollectionSongList}/>
                    <Route path="/logorreg" component={LogOrReg}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/newmusiclist" component={NewMusicList}/>
                    <Route path="/rankinglist" component={RankingList}/>
                    <Route path="/recommend" component={Recommend}/>
                    <Route path="/songmenudetail" component={SongMenuDetail}/>

                </div>

            </ConnectedRouter>
        )
    }
}
