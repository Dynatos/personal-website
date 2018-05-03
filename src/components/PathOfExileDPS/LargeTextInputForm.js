import React, { Component } from 'react';

export default class LargeTextInputForm extends Component {
  
  render() {
    
    const that = this;
    
    return (
      <form className="poe-form-parent">
        <textarea id="poe_item_data" className="poe-form-input" type="text" placeholder="Paste Item Data Here"
                  onBlur={function pathOfExileDPSCalculateFormBlurCallback(){
                    console.log('props for form: ', that.props);
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
