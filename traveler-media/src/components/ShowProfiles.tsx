import React, { useState } from 'react';
import profileImage from './traveler-media/src/ProfilePicture.jpg'

const users = [
  { name: 'John', city: 'Paris', img: profileImage },
  { name: 'Mary', city: 'London', img: profileImage },
  { name: 'Bob', city: 'Paris', img: profileImage },
  { name: 'Jane', city: 'Prague', img: profileImage },
  { name: 'Mike', city: 'Sofia', img: profileImage },
];

const countries = ['Paris', 'London', 'Prague', 'Sofia'];

function App() {
  const [selectedcity, setSelectedcity] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  function handleSelect(event: { target: { value: React.SetStateAction<string>; }; }) {
    setSelectedcity(event.target.value);
    setFilteredUsers(users.filter(user => user.city === event.target.value));
  }

  return (
    <div>
      <label>
        Select a city:
        <select value={selectedcity} onChange={handleSelect}>
          <option value="">All</option>
          {countries.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </label>
      <h2>Users from {selectedcity}:</h2>
      <ul>
      {filteredUsers.map(user => (
        <div key={user.name} style={{ display: "flex", alignItems: "left"}}>
        <img src={user.img} alt={`${user.name} profile picture`} style={{ width: '25px', height: '25px', marginRight: '10px' }} />
        <p>{user.name}</p>
      </div>
        ))}
      </ul>
    </div>
  );
}

export default App;