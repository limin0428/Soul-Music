import React, {Component} from 'react';
import './index.css';
import SongView from '../../../../components/SongView/index';
import HomeTab from "../../../../components/HomeTab/index";

export default class RecList extends Component {
  render() {
    return (
      <div>
          <HomeTab/>
          <div className="RecList">
              <SongView/>
          </div>
      </div>
    )
  }
}
