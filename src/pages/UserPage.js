import React from 'react';
import {Link} from 'react-router-dom';

const UserPage = () => (
  <div>
    <p>User Page</p>
    <Link to="/users">back to users list</Link>
  </div>
);

export default UserPage;
