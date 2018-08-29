import React, { Component } from 'react';
import NavBar from "../NavBar/NavBar";
import FletchingExp from "./FletchingExp";

export default class RunescapeExpToolContainer extends Component {
  
  render() {
  
    return (
      <div className="runescape-exp-tool-highest-parent">
        <NavBar />
        <FletchingExp />
      </div>
    );
    
  }
}
