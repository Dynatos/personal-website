import React, { Component } from 'react';
import ReactSearchBar from 'react-search-bar';
import { setStrengthValueFromEquipment } from '../../../scripts/calculateMaxHitCapsule';
import allItemData from './items_with_strength_bonus';

const suggestions = getSuggestionsFromObjects(allItemData);

function getSuggestionsFromObjects(objectWithNames) {
  const itemNameArray = Object.keys(objectWithNames);
  const returnArr = [];
  itemNameArray.forEach((currentName) => {
    const value = currentName.split('_').join(' ');
    returnArr.push(value.toLowerCase());
  });
  return returnArr;
}

function getDefaultSuggestions(suggestions) {
  return suggestions.slice(0, 20);
}

function suggestionRenderer(suggestion) {
  return (
    <span>
      <span>{suggestion[0].toUpperCase().concat(suggestion.substring(1))}</span>
    </span>
  );
}

export default class EquipmentSelector extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      suggestions: getDefaultSuggestions(suggestions),
    };
  }
  
  handleChange(value) {
    const newSuggestions = [];
    
    suggestions.forEach((word) => { // for each word
      
      if (newSuggestions.length >= 20) {
        return;
      }
      
      if (word.indexOf(value) !== -1) {
        newSuggestions.push( // push the current word into the new set of suggestions
          word
        );
      }
      
    });
    
    this.setState({
      ...this.state,
      suggestions: newSuggestions
    });
  }
  
  handleSearch(value) {
    const item = allItemData[value] || suggestions.forEach(word => word.filter(word.includes(value)));
    
    if (typeof item === 'object') {
      const strengthValue = item.other.melee_strength;
      console.log('setting strength value: ', strengthValue);
      setStrengthValueFromEquipment(strengthValue);
    }
  }
  
  handleClear() {
    this.setState({
      ...this.state,
      suggestions: getDefaultSuggestions(suggestions)
    });
  }
  
  render() {
    
    return (
      <ReactSearchBar
        renderClearButton
        renderSearchButton
        placeholder="Enter an item's name"
        onChange={this.handleChange.bind(this)}
        onClear={this.handleClear.bind(this)}
        onSearch={this.handleSearch.bind(this)}
        suggestions={this.state.suggestions}
        suggestionRenderer={suggestionRenderer}
        id="RunescapeMaxHitGearSearchBar"
      />
    );
  }
}
