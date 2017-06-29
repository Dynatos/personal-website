import React, {Component} from 'react';


//TO DO: replace 00 (line 20) with injected stat total number

class FinalStatsIconAndStat extends Component {

  render() {

    let iconName = this.props.imageNamePath || this.props.attackStyle;

    return (
      <div>
        <div className={"all-stat-icon " + this.props.attackStyle + "-icon"}>
          <img src={require('../../static/htmlcssimages/images/icons/' + iconName + '.png')} className="icon-image" />
        </div>
        <div className="final-stats-stat">
          {this.props.displayValue}
        </div>
      </div>
    );
  }
}

export default FinalStatsIconAndStat;
