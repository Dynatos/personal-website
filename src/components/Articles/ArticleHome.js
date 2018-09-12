import React, { Component } from 'react';
import NavBar from "../NavBar/NavBar";
import ArticleSideBar from "./ArticleSideBar";
import ArticleColumn from "./ArticleColumn";

export default class ArticleHome extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="article-all-highest-parent">
          <ArticleColumn />
          <ArticleSideBar />
        </div>
      </div>
    );
  }
}
