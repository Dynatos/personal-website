import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar/NavBar';

const NotFoundPage = () => {
  return (
    <div>
      <NavBar/>
      <h4>
        404 Page Not Found
      </h4>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
