import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IconAndCheckbox extends Component {

  render() {

    // Allows our classNames to be consistent with our CSS names and image names
    let iconName = this.props.imageNamePath || this.props.attackStyle;
    
    return (
      <div>
        <div className={"all-stat-icon " + this.props.attackStyle + "-icon"}>
          <img src={require('../../static/htmlcssimages/images/icons/' + iconName + '.png')}
               className="icon-image"
          />
        </div>
        <div>
          <input type="checkbox" className="user-choice-stat"
                 onChange={this.props.handleClick}
                 value={this.props.checked}
          />
        </div>
      </div>
    );
  }
}

export default IconAndCheckbox;

IconAndCheckbox.propTypes = {
  checked: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  imageNamePath: PropTypes.string,
  attackStyle: PropTypes.string
};
