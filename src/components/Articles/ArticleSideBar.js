import React, { Component } from 'react';
import { data } from './articleData';

export default class ArticleSideBar extends Component {
  
  render() {
    const filters = [];
    const typeFilter = (element, index) => {
      if (filters.indexOf(element.type) === -1) {
        filters.push(element.type);
        return (
          <li key={index} className="article-sidebar-filter">
            {element.type}
          </li>
        );
      }
    };
    
    return (
      <aside className="article-sidebar-highest-parent">
        <ul className="article-sidebar-filter-parent">
          <h2>
            Filter by:
          </h2>
          <br/>
          {data.map(typeFilter)}
          
          <h2>
            Posts by date:
          </h2>
          <br/>
          {"TODO: replace with mapped data"}
        </ul>
      </aside>
    );
  }
}
