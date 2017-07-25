import React, {Component} from 'react';
import NavBarElement from './NavBarElement';
import returnBackground from '../../../scripts/backgroundColor';

class NavBar extends Component {

  componentDidMount() {
    returnBackground();
  }

  render() {

    return (
      <div className="navbar-parent">
        <NavBarElement />
      </div>
    );
  }
}

export default NavBar;
