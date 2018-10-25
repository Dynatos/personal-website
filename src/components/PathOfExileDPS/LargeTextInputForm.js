import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LargeTextInputForm extends Component {
  
  render() {
    
    const that = this;
    
    return (
      <form className="poe-form-parent">
        <textarea id="poe_item_data" className="poe-form-input" type="text" placeholder="Paste Item Data Here"
                  onBlur={function pathOfExileDPSCalculateFormBlurCallback(){
                    const itemData = document.querySelector('#poe_item_data').value;
                    if (itemData) {
                      that.props.calculatePOEDPS(itemData);
                    }
                  }}
                  onSubmit={function pathOfExileDPSCalculateFormSubmitCallback(){
                    const itemData = document.querySelector('#poe_item_data').value;
                    if (itemData) {
                      that.props.calculatePOEDPS(itemData);
                    }
                  }}
        >
        </textarea>
      </form>
    );
    
  }
}

LargeTextInputForm.propTypes = {
  calculatePOEDPS: PropTypes.func.isRequired
};
