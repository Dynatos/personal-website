import React, {Component} from 'react';
import dataFirstHalf from './dictionary-data';
import dataSecondHalf from './dictionary-data2';

export default class Dictionary extends Component {
  render() {
    return (
      <div>
        <div>
          {JSON.stringify(dataFirstHalf)}
          <br/>
          {JSON.stringify(dataSecondHalf)}
        </div>
      </div>
    );
  }
}
