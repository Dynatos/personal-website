import React, { Component } from 'react';

export default class LargeTextInputForm extends Component {
  
  render() {
    
    return (
      <form className="poe-form-parent">
        <input className="poe-form-input" type="text" placeholder="Paste Item Data Here" onSubmit={function(){alert('dps')}}/>
      </form>
    );
    
  }
}
