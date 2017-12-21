import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from "../../store/actions/session";
import './style.css';
import {Link,NavLink} from 'react-router-dom'
 class Profile extends Component {
     componentDidMount(){
         this.props.validate();
     }
    render() {
        return (
            <div>
                <div className='personal'>
                    <div className="personal-main">
                        <i
                            onClick={()=>this.props.history.push('/')}
                            className="iconfont icon-fanhui"></i>
                        <div className="personal-info">
                            <div className="user-avater">
                                {
                                    this.props.user?<img src={require('../../images/1.jpg')}/>:<img src={require('../../images/avater.jpg')}/>
                                }
                            </div>
                            <div className="username">
                                {
                                    this.props.user?this.props.user.username:<Link to="/login">请先登录账号</Link>
                                }
                            </div>
                            <p className='user-fan'>
                                <span>关注{this.props.user?'259':'0'}</span>
                                <span className='fan-num'>粉丝{this.props.user?'30':'0'}</span>
                            </p>
                        </div>
                        <div className="personal-data">
                            {
                                this.props.user?<Link to="/myinfo">我的资料</Link>:'我的资料'
                            }
                        </div>
                    </div>
                    <div className="personal-items">
                        <ul>
                            <li>
                                <NavLink to="/profile/CollectionSongList">&nbsp;&nbsp;&nbsp;&nbsp;音&nbsp;乐&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/PersonalDynamic">&nbsp;&nbsp;&nbsp;&nbsp;动&nbsp;态&nbsp;&nbsp;&nbsp;&nbsp;</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile/AboutMe">&nbsp;&nbsp;&nbsp;关于我&nbsp;&nbsp;&nbsp;</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(Profile)