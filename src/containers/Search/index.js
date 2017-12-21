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
                                <li key={index} className="search-item">{item.name}--{item.artists[0].name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


