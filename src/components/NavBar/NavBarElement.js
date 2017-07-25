import React, {Component} from 'react';
import {Link} from 'react-router';
import navBarData, {navElements} from './NavBarData';

// NavBarElement is the component that will map all our nav data to Link elements
class NavBarElement extends Component {

  homepageActivator(link) {
  if (link !== "/") {
    return link;
  }
  return "homepage";
}

// renderNavBarElements is the function that does the mapping. It is called as the callback function for the map that
// returns all of our NavBar elements. Each element is created by taking the NavBarData and mapping it into the relevant
// areas. Each element needs a link which must have a "to" property that defines what url to send the user to. The Links
// will also need to have a short string that describes where the Link will send the user (e.g. "Runescape Gear Suggestor"
// would link to /runescape where you could find the Runescape gear suggesting app)
  renderNavBarElements(navElement) {
    let currentNavDataToMap = navBarData[navElement];

    return (
      <div className={"navbar-element nav-element--" + this.homepageActivator(currentNavDataToMap.linkTo)} key={currentNavDataToMap.linkTo}>
        <Link to={currentNavDataToMap.linkTo}>
          {currentNavDataToMap.description}
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="nav-element-holder">
        {navElements.map(this.renderNavBarElements, this)}
      </div>
    );
  }
}

export default NavBarElement;
