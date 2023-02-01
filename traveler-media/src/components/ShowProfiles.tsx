import React, { useState,useEffect } from 'react';
import profileImage from '../ProfilePicture.jpg';




function ShowProfiles(props:any) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(`${process.env.REACT_APP_BACKEND}api/users`)
    const data = await response.json();
    setUsers(data);
  }
  
  const [filteredUsers, setFilteredUsers] = useState(users);
  
  useEffect(() => {
    setFilteredUsers(users.filter(user => user['cityName'] === props.props.clickedCity));
  }, [props.props.clickedCity, users]);

  return (
    <div>
      <h1>Select a city on the map</h1>
      <h2>Users in {props.props.clickedCity}:</h2>
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

export default ShowProfiles;