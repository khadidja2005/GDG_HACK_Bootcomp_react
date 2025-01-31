import React, { useState, useEffect } from 'react';
import './User.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    // fetch('https://jsonplaceholder.org/users')
    //   .then(response => response.json())
    //   .then(data => {
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch(error => {
    //     setError(error);
    //     console.log(error);
    //     setLoading(false);
    //   });
    axios.get('https://jsonplaceholder.org/users') // get : get data from backend   
      .then(response => {
        setUsers(response.data); // successfull
        setLoading(false);
      })
      .catch(error => {
        setError(error); 
        console.log("catch error" ,error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error loading posts: {error.message}</p>;

  return (
    <div className="users-container">
      <h1>Users</h1>
      <ul className="users-list">
        {users.map(user => (
          // during workshop I wrote id instead of user.id :)
          <li key={user.id} onClick={ ()=> navigate(`/user/${user.id}`)} >
            <h2>{user.login.username}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
