import React,{Component} from 'react';
import SongListsBar from '../../../components/SongListsBar/index';
import SongLists from '../../../components/SongLists/index';
import './index.css';
export default class SingerList extends Component{
    render(){
        return (
            <div>
              <div className="singer-avater">
                <img src="http://p3.music.126.net/xSbsHOsME0EaNl7VdAhCEQ==/18678503534930599.jpg?param=640y300" alt=""/>
              </div>
              <SongListsBar/>
              <SongLists/>
            </div>
        )
    }
}
