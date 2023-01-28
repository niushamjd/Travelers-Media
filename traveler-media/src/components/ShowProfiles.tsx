import React, { useState,useEffect } from 'react';
import profileImage from '../ProfilePicture.jpg';



const countries = ['Paris', 'London', 'Prague', 'Sofia'];

function App() {
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    fetch(`${process.env.REACT_APP_BACKEND}api/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);
  
  const [selectedcity, setSelectedcity] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
/*
  function handleSelect(event: { target: { value: React.SetStateAction<string>; }; }) {
    setSelectedcity(event.target.value);
    setFilteredUsers(users.filter(user => user.city === event.target.value));
  }*/

  return (
    <div>
      <label>
        Select a city:
        <select value={selectedcity}>
          <option value="">All</option>
          {countries.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </label>
      <h2>Users from {selectedcity}:</h2>
      <ul>
      {users.map(user => (
        <div key={user['username']} style={{ display: "flex", alignItems: "left"}}>
        <img src={profileImage} alt={`${user['username']} profile picture`} style={{ width: '25px', height: '25px', marginRight: '10px' }} />
        <p>{user['username']}</p>
      </div>
        ))}
      </ul>
    </div>
  );
}

export default App;