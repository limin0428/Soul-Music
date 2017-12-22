import React,{Component} from 'react';
import './index.css';

import {connect} from 'react-redux'
import Tab from '../../../../components/Tab';
import actions from '../../../../store/actions/playList';
class RankingList extends Component{
    componentDidMount(){
     /* this.props.fetchTopList()*/
    }
    componentDidUpdate(){
      console.log(this.props);
    }
    render(){
      let images=['http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150','http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=150y150','http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=150y150','http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=150y150','http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=150y150','http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=150y150','http://p1.music.126.net/CUqQp33MZf_m0BwH4u0V6A==/109951163078922993.jpg?param=150y150','http://p1.music.126.net/qN-sDLqehN1oHGyov-0EZw==/109951163068669685.jpg?param=150y150'];
        return (
            <div className="ranklists">
              <Tab title="排行榜"/>
              <ul>
                {
                  images.map((item,index)=>(
                        <li className="ranklist" key={index}>
                          <div className="rank-cover">
                            <img src={item}/>
                          </div>
                          <div className="rank-hot">
                            <p>1.空空如也-胡66</p>
                            <p>1.空空如也-胡66</p>
                            <p>1.空空如也-胡66</p>
                          </div>
                        </li>
                  ))
                }
              </ul>
            </div>
        )
    }
}

export default connect(
    state=>state,
    actions
)(RankingList)

