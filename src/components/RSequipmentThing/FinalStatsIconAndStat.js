import React, {Component} from 'react';

// This is the component called in FinalStats, it is called in the return statement of our map function there. This is
// where all relevant data is received as props
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
