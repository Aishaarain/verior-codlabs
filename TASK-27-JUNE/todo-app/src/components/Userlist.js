import React from 'react';
import Fetch from './Fetch'; // Make sure your useFetch.js is in the same folder

const UserList = () => {
  const { data,  error } = Fetch('https://jsonplaceholder.typicode.com/users');


  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data && data.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default UserList;
