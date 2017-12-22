import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import './index.less'
class Tab extends Component{
    render(){
        return (
            <div className="tab">
                <i className="iconfont icon-fanhui" onClick=></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
}
export default withRouter(Tab)