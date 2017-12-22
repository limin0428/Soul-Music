import React, {Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';
import HomeTab from "../../../../components/HomeTab/index";

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
                <HomeTab/>
                <div className="RecList">
                    <SongView personalized={this.state.personalized} />
                </div>
            </div>
        )
    }
}
