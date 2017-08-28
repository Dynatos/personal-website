import React from 'react';
import { connect } from 'react-redux';
import { toggleStat } from '../actions';

let ToggleDesiredStat = ({ dispatch }) => {
  return (
    <div className="todo-app-highest-parent">
      <input type="checkbox" className="user-choice-stat" onChange={dispatch(toggleStat(this.props.attackStyle))}
             value={this.props.checked} />
    </div>
  );
};
ToggleDesiredStat = connect()(ToggleDesiredStat);

export default ToggleDesiredStat;
