import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../../styles/about-page.css';

class List extends Component{
  render() {
    let titleText = this.props.type;
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

export default List;

List.propTypes = {
  type: PropTypes.string,
  children: PropTypes.any
};
