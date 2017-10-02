import React, { Component } from 'react';
import { data } from './articleData';

export default class ArticleColumn extends Component {
  
  render() {
    
    const dataMapCallback = (e, i) => {
      let element = e;
      let readMore = '';
      if (element.media.article) {
        readMore = "Read the rest ";
      }
      let article = '';
      if (element.media.article) {
        article = element.media.article;
      }
      let innerText = '';
      if (element.media.article) {
        innerText = 'here';
      }
      return (
        <section key={i} className="article-column-section">
          <h1 className="article-column-head">
            {element.title}
          </h1>
          <p className="article-column-body">
            {element.body}
          </p>
          {readMore}<a href={article}>{innerText}</a>
        </section>
      );
    };
    
    return (
      <section className="article-column-highest-parent">
        {data.map(dataMapCallback)}
      </section>
    );
  }
}
