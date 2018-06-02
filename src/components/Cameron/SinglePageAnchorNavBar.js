import React, { Component } from 'react';

export default class SinglePageAnchorNavBar extends Component {

  renderNavItems() {

    const { navData } = this.props;
    const keysForMap = Object.keys(navData);

    return keysForMap.map(function renderNavItemsMapCallback(e, i) {
      return (
        <div key={"nav-element-index-" + i} className="navbar-anchor-parent">
          <a href={'#' + navData[e].id} className="navbar-anchor-element">
            {navData[e].textToDisplay}
          </a>
        </div>
      );
    });
  }

  render() {

    return (
      <div className="navbar-single-page">
        {this.renderNavItems()}
      </div>
    );
  }
}
