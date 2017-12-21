import React,{Component} from 'react';
import{HashRouter as Router,Route} from 'react-router-dom';
import Login from "./containers/Login/index";
import Reg from "./containers/Reg/index";
import LogOrReg from "./containers/LogOrReg/index";
import NavLeft from "./containers/NavLeft/index";
import PersonalCenter from "./containers/Profile/PersonalCenter/index";
import createHashHistory from '../node_modules/history/createHashHistory';
import {ConnectedRouter} from 'react-router-redux'
import Home from "./containers/Home/Home";
import Search from "./containers/Search/index";
import Single from "./containers/Single/Single";
import NewMusicList from './containers/Home/Music/NewMusicList/index';
import RankingList from './containers/Home/Music/RankingList/index';
import Recommend from './containers/Home/Music/Recommend/index';
import SongMenuDetail from './containers/SongMenuDetail/index';
import VideoList from './containers/Video/VideoList/index';
import VideoPage from './containers/Video/VideoPage/index';
import './app.css';
let history =createHashHistory();
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/single" component={Single}/>
                    <Route path="/personalcenter" component={PersonalCenter}/>
                    <Route path="/logorreg" component={LogOrReg}/>
                    <Route path="/navleft" component={NavLeft}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/newmusiclist" component={NewMusicList}/>
                    <Route path="/rankinglist" component={RankingList}/>
                    <Route path="/recommend" component={Recommend}/>
                    <Route path="/songmenudetail" component={SongMenuDetail}/>
                    <Route path="/video" component={VideoList}/>
                    <Route path="/videopage" component={VideoPage}/>
                </div>
            </ConnectedRouter>
        )
    }
}
