import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleStat } from '../../actions/index';

// let ToggleDesiredStat = ({ dispatch }) => {
//   return (
//     <div className="todo-app-highest-parent">
//       <input type="checkbox" className="user-choice-stat" onChange={dispatch(toggleStat(this.props.attackStyle))}
//              value={this.props.checked} />
//     </div>
//   );
// };

class ToggleDesiredStat extends React.Component {
  
  render() {
  
    const { dispatch, checked, attackStyle } = this.props;
    
    return (
      <div className="todo-app-highest-parent">
        <input type="checkbox" className="user-choice-stat" onChange={dispatch(toggleStat(attackStyle))}
               value={checked} />
      </div>
    );
  }
}

const ConnectToggleDesiredStat = connect()(ToggleDesiredStat);

export default ConnectToggleDesiredStat;

ToggleDesiredStat.propTypes = {
  dispatch: PropTypes.func.isRequired,
  attackStyle: PropTypes.string,
  checked: PropTypes.bool
};
