import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import navBarData, { navElements } from './NavBarData';

const numberOfNavElements = navElements.length;

function homepageLinkClassNameAssigner(link) {
  if (link !== "/") {
    return link;
  }
  return "homepage";
}

// NavBarElement is the component that will map all our nav data to Link elements
class NavBarElement extends Component {

// renderNavBarElements does the mapping. It is called as the callback function for the map that
// returns all of our NavBar elements. Each element is created by taking the NavBarData and mapping it into the relevant
// areas. Each element needs a link which must have a "to" property that defines what url to send the user to. The Links
// will also need to have a short string that describes where the Link will send the user (e.g. "Runescape Gear Suggestor"
// would link to /runescape where you could find the Runescape gear suggesting app)
  renderNavBarElements(navElement) {
    let currentNavDataToMap = navBarData[navElement];

    return (
      <NavLink //activeClassName="navbar-element-active"
            to={'/' + currentNavDataToMap.linkTo}
            className={"navbar-element navbar-element--link nav-element--" + homepageLinkClassNameAssigner(currentNavDataToMap.linkTo)}
            activeClassName={currentNavDataToMap.linkTo === 'runescape' ? "navbar-element-runescape-active" : "navbar-element-active"}
            exact={true}
            key={navElement}
      >
        <div key={currentNavDataToMap.linkTo} className="navbar-element-inner-text">
        {currentNavDataToMap.description}
        </div>
      </NavLink>
    );
  }
  
  addSpacer(element, index) {
    return [element, (index + 1 === numberOfNavElements ? '' : [
        <div key={'navbar-spacer-' + index} className="navbar-spacer">{' '}</div>,
        <div key={'navbar-spacer-no-border-' + index} className="navbar-empty-spacer">{' '}</div>])
    ];
  }

  render() {
    return (
      <div className="nav-element-holder">
        {navElements.map(this.renderNavBarElements, this).map(this.addSpacer)}
      </div>
    );
  }
}

export default NavBarElement;
