import React, { Component } from 'react';
import { data } from './articleData';

export default class ArticleSideBar extends Component {
  
  render() {
  
    const dataMapCallback = (e, i) => {
      let element = e;
      return (
        <div key={i} className="article-sidebar-item">
          <h2 className="article-sidebar">
            {element.title}
          </h2>
          <p>
            {element.body}
          </p>
        </div>
      );
    };
    
    return (
      <div>
        <aside className="article-side-bar-highest-parent">
          {data.map(dataMapCallback)}
        </aside>
      </div>
    );
  }
}
