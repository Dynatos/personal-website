import React, {Component} from 'react';

class IconAndCheckbox extends Component {

  render() {

    // This variable allows our classNames to be consistent with our CSS names and image names, as some of the
    // attackStyles are named in a different fashion for our data references to line up
    let iconName = this.props.imageNamePath || this.props.attackStyle;

    // This component looks a little intimidating but it's just a lot of string concatenation, this is because this
    // component is rendered through a map, so the names are assigned dynamically
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
