import React from "react"
import "../styles.css"
import { AuthContext } from "../context/AuthContext"
export default function() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submit")
  }
const { user }: any = React.useContext(AuthContext)
  return (
    <div className="chatFormContainer">
      <form className="chatForm">
        <div className="chatFormContent">
          <h3 className="chatFormTitle">Chat</h3>

          <div className="form-group mt-3">
            <label className="userLeft">{user?.username}</label>
            <p className="form-control mt-1">
              Hey, where are you?
            </p>
          </div>
          <div className="form-group mt-3">
            <label className="userLeft">Deniz</label>
            <input
              type="content"
              className="form-control mt-1"
              placeholder="Answer here..."   
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </div>

        </div>
        <div className="chatFormFooter">
           <a href="./">Click here to find other travelers on the map!</a>
        </div>
      </form>
    </div>
  )
}