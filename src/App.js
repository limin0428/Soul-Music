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
import './app.css';
let history =createHashHistory();
export default class App extends Component{
    render(){
        return (
            <ConnectedRouter history={history}>
                <div>
                    {/*主页*/}
                    <Route exact path="/" component={Home}/>
                    {/*搜索页*/}
                    <Route path="/search" component={Search}/>
                    {/*播放页*/}
                    <Route path="/single" component={Single}/>
                    {/*个人中心页  ==>来源：navleft*/}
                    <Route path="/personalcenter" component={PersonalCenter}/>
                    {/*登录主页册  ==>navleft*/}
                    <Route path="/logorreg" component={LogOrReg}/>
                    <Route path="/navleft" component={NavLeft}/>
                    {/*登录页*/}
                    <Route path="/login" component={Login}/>
                    {/*注册页*/}
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
