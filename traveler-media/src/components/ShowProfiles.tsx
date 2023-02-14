import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileImage from '../images/ProfilePicture.jpg';



function ShowProfiles(props:any) {
  const history = useHistory();


  const url = window.location.href;
  const parts = url.split('/');
let city = parts[parts.length - 1];

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
  if(props.props.clickedCity !="")
  city = props.props.clickedCity;
  useEffect(() => {
  setFilteredUsers(users.filter(user => user['cityName'] === city));
}, [city, users]);
  function chatWithUser() {
    history.push('/chatscreen');
    history.go(0);
  }
  return (
    <div>
      <h2>You can select a city on the map</h2>
      <h3>Users in {city}:</h3>
      <h4>Click on users to chat</h4>
      <ul onClick={chatWithUser}>
      {filteredUsers.map(user => (
        <div key={user['username']} style={{ display: "flex", alignItems: "left"}}>
        <img src={profileImage} alt={`${user['username']} profile picture`} style={{ width: '25px', height: '25px', marginRight: '10px', cursor: "pointer" }} />
        <div className='Auth-form-title'>{user['username']}</div>
        <div className='Auth-form-content'>{user['about']}</div>
        
      </div>
        ))}
      </ul>
    </div>
  );
}

export default ShowProfiles;