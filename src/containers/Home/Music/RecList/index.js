import React, {Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';
import Tab from "../../../../components/Tab/index";

import {getPersonalized} from '../../../../api/home'

export default class RecList extends Component {
    constructor() {
        super();
        this.state = {personalized: []}
    }
    componentDidMount() {
        getPersonalized().then(res => {
            console.log(res.result);
            this.setState({personalized: res.result});
        });
    }
    render() {

        return (
            <div>
                <Tab title="新碟首发"/>
                <div className="RecList">
                    <SongView personalized={this.state.personalized} />
                </div>
            </div>
        )
    }
}
