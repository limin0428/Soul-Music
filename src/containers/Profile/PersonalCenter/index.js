import React, {Component} from 'react';
import MyInfoData from '../MyInfoData';
import CollectionSongList from '../CollectionSongList';
import PersonalDynamic from '../PersonalDynamic';
import AboutMe from '../AboutMe';
import './style.css';

export default class PersonalCenter extends Component {
    render() {
        return (
            <div>
                <div className='personal'>
                    <div className="personal-main">
                        <div className="personal-info">
                            <div className="user-avater"></div>
                            <div className="username">RichardM</div>
                            <p className='user-fan'>
                                <span>关注 3</span>
                                <span className='fan-num'>粉丝 1</span>
                            </p>
                        </div>
                        <div className="personal-data">
                            我的资料
                            {/*<MyInfoData />*/}
                        </div>
                    </div>
                    <div className="personal-items">
                        <ul>
                            <li>
                                歌单
                                <div className="item-songlist">
                                    <CollectionSongList />
                                </div>
                            </li>
                            <li>
                                动态
                                {/*<PersonalDynamic />*/}
                            </li>
                            <li>
                                关于我
                                {/*<AboutMe />*/}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
