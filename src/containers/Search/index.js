import React, {Component} from 'react';
import "./index.css"
import  {Link} from  "react-router-dom";
import {getSearch} from '../../api/home'
export default class Search extends Component {
    constructor() {
        super();
        //wd 是输入框的值  words是一个空数组
        this.state = {wd: '', words: [], keywords: []};
        window.jsonpCallback = (result) => {
            console.log(result);
            this.setState({words: result.s});
        }
    }

    handleChange = (event) => {
        let wd = event.target.value;
        console.log(wd);
        getSearch(wd).then(res => this.setState({keywords: res.result.songs})).catch(err => console.log(err));
        this.setState({wd});
    };

    render() {
        console.log(this.state.keywords);
        return (
            <div>
                <div className="search-header">
                    <Link to="/"> <span>取消</span></Link>
                    <div className="search-headerBox">
                        <input
                            onChange={this.handleChange}
                            value={this.state.wd}
                            type="text"
                            className="search-inputBox"
                            placeholder="搜索音乐、歌词、视频、电台"/>
                    </div>
                </div>
                <div className="search-body">
                    <ul className="search-list">
                        {
                            this.state.keywords.map((item, index) => (
                                <Link to={`/single?id=${item.id}`} key={index}>
                                    <li className="search-item">
                                        <div className="songlist-item">
                                            <p className="songlist-name-item">{item.name}</p>
                                            <p className="songlist-name-item-min">{item.artists[0].name}</p>
                                        </div>
                                        <div className="songlist-icon-item">
                                            <i className="iconfont icon-sandian"></i>
                                        </div>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>

                        {/*<ul className="search-list">*/}
                            {/*{*/}
                                {/*this.state.keywords.map((item, index) =>(*/}
                                    {/*<Link to={`/single?id=${item.id}`}>*/}
                                        {/*<li key={item.id}>*/}
                                            {/*<div className="songlist-left">{index+1}</div>*/}
                                            {/*<div className="songlist">*/}
                                                {/*<p className="songlist-name">{item.name}</p>*/}
                                                {/*<p>{item.ar[0].name} - {item.al.name}</p>*/}
                                            {/*</div>*/}
                                            {/*<div className="songlist-icon">*/}
                                                {/*<i className="iconfont icon-sandian"></i>*/}
                                            {/*</div>*/}
                                        {/*</li>*/}
                                    {/*</Link>*/}
                                {/*))*/}
                            {/*}*/}
                        {/*</ul>*/}

                </div>
            </div>
        )
    }
}


