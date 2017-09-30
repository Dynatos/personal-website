import React, { Component } from 'react';
import NavBar from "../NavBar/NavBar";
import ArticleSideBar from "./ArticleSideBar";

export default class ArticleHome extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <ArticleSideBar />
        {/*<ArticleColumn />*/}
      </div>
    );
  }
}
