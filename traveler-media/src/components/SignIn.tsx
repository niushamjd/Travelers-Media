import {useState,useEffect} from "react"
import "../styles.css"
export default function(){
  const [users, setUsers] = useState([])
  const fetchData = () => {
  fetch(`${process.env.REACT_APP_BACKEND}api/users`)
  .then(res => res.json())
  .then(data => setUsers(data));
}
useEffect(() => {
  fetchData();
}, []);
console.log(users)
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="sign-up text-right mt-2">
            Don't have an account? <a href="./SignUp">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  )
}