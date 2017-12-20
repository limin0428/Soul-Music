import React, {Component} from 'react';
import "./index.css"
import  {Link} from  "react-router-dom";
export default class Search extends Component {
    constructor() {
        super();
        //wd 是输入框的值  words是一个空数组
        this.state = {wd: '', words: []};
        window.jsonpCallback = (result) => {
            console.log(result);
            this.setState({words:result.s});
        }
    }
    handleChange = (event) => {
        let wd = event.target.value;

        this.setState({wd});
    }
    render() {
        return (
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
                <div className="panel-body">
                    <ul className="list-group">
                        {
                            this.state.words.map((item, index) => (
                                <li key={index} className="list-group-item">{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


