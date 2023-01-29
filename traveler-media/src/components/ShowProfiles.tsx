import React, { useState,useEffect } from 'react';
import profileImage from '../ProfilePicture.jpg';




function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}api/users`)
    const data = await response.json();
    setUsers(data);
  }
  
  const [selectedcity, setSelectedcity] = useState('?');
  
  const [filteredUsers, setFilteredUsers] = useState(users);

  
  const cities = users.map(user => user['cityName']).filter((city, index, self) => self.indexOf(city) === index);

  function handleSelect(event: { target: { value: any; }; }) {

    
    if(event.target.value === 'All') {
      setSelectedcity('All');
      setFilteredUsers(users);
      return;
    }
    setSelectedcity(event.target.value);
    setFilteredUsers(users.filter(user => user['cityName'] === event.target.value));
  }

  return (
    <div>
      <label>
        Select a city:
        <select value={selectedcity} onChange={handleSelect}>
          <option value="All">All</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </label>
      <h2>Users in {selectedcity}:</h2>
      <ul>
      {filteredUsers.map(user => (
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