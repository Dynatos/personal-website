import React, {Component} from 'react';

class IconAndCheckbox extends Component {

  render() {

    let iconName = this.props.imageNamePath || this.props.attackStyle;

    return (
      <div>
        <div className={"all-stat-icon " + this.props.attackStyle + "-icon"}>
          <img src={require('../../static/htmlcssimages/images/icons/' + iconName + '.png')} className="icon-image" />
        </div>
        <div>
          <input type="checkbox" className="user-choice-stat" onChange={this.props.handleClick}
                 value={this.props.checked} />
        </div>
      </div>
    );
  }
}

export default IconAndCheckbox;
