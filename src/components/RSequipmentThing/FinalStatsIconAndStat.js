import React, { Component } from 'react';
import PropTypes from 'prop-types';

// This is called in FinalStats.js, data is mapped and received as props
class FinalStatsIconAndStat extends Component {

  render() {
    const { imageNamePath, attackStyle, displayValue } = this.props;
    const iconName = imageNamePath || attackStyle;
    
    return (
      <div>
        
        <div className={"all-stat-icon " + attackStyle + "-icon"}>
          <img src={require('../../static/htmlcssimages/images/icons/' + iconName + '.png')} className="icon-image"/>
        </div>
        
        <div className="final-stats-stat">
          {displayValue > 0 ? displayValue : '?'}
        </div>
        
      </div>
    );
  }
}

export default FinalStatsIconAndStat;

FinalStatsIconAndStat.propTypes = {
  imageNamePath: PropTypes.string,
  attackStyle: PropTypes.string.isRequired,
  displayValue: PropTypes.string
};
