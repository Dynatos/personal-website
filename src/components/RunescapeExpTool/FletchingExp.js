import React, { Component } from 'react';

function calculateExp() {
  const currentExp = document.querySelector('#fletching-exp');
  const currentLevel = document.querySelector('#fletching-level');
  const actionExp = document.querySelector('#fletching-exp-per-action');
  const numLogs = document.querySelector('#fletching-logs');
  const numUnstrungs = document.querySelector('#fletching-unstrungs');
  const numFlax = document.querySelector('#fletching-flax');
  const numBowStrings = document.querySelector('#fletching-strings');
  
  
  
}

export default class FletchingExp extends Component {
  
  render() {
    
    return (
      <div className="runescape-exp-fletching-parent">
        <form onSubmit={calculateExp}>
          <input id="fletching-exp" type="number" placeholder="Current EXP" />
          <input id="fletching-level" type="number" placeholder="Current Level" />
          <input id="fletching-level-desired" type="number" placeholder="Desired Level" />
          <input id="fletching-exp-per-action" type="number" placeholder="EXP per Action" />
          <input id="fletching-logs" type="number" placeholder="# of Logs" />
          <input id="fletching-unstrungs" type="number" placeholder="# of Unstrungs" />
          <input id="fletching-flax" type="number" placeholder="# of Flax" />
          <input id="fletching-strings" type="number" placeholder="# of Bow Strings" />
          <input id="fletching-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
    
  }
}
