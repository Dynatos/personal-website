import React, {Component} from 'react';
import NavBarElement from './NavBarElement';

class NavBar extends Component {

  render() {

    return (
      <div className="navbar-parent">
        <NavBarElement/>
      </div>
    );
  }
}

export default NavBar;
