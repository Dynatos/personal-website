import React from 'react';
import {Link} from 'react-router';
import NavBar from './NavBar/NavBar';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1>Jason's basic homepage</h1>
      <h2>Available projects</h2>
      <div>
        <div>Check out this <Link to="runescape">Runescape Gear Suggestor</Link> (it has incomplete data at the moment so don't rely on it to be 100% accurate!)</div>
        <div>Also take a peek at <Link to="todo">this basic "todo" app</Link> (coded by Dan Abramov, added as a test/proof of concept)</div>
      </div>
    </div>
  );
};

export default HomePage;
