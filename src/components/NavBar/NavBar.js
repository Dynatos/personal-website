import React, {Component} from 'react';
import NavBarElement from './NavBarElement';

class NavBar extends Component {

  render() {

    return (
      <div className="navbar-parent">
        I am nav
        <NavBarElement/>
      </div>
    );
  }
}

export default NavBar;
