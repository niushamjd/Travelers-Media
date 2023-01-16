import React from "react"
import "../styles.css"
export default function() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <div className="chatFormContainer">
      <form className="chatForm">
        <div className="chatFormContent">
          <h3 className="chatFormTitle">Chat</h3>

          <div className="form-group mt-3">
            <label className="userLeft">Deniz</label>
            <p className="form-control mt-1">
              Hey, where are you?
            </p>
          </div>

          <div className="form-group mt-3">
            <label className="userRight">Nyusha</label>
            <p className="form-control mt-1">
              Hey, I am on my way to Istanbul in Turkey!
            </p>
          </div>

          <div className="form-group mt-3">
            <label className="userLeft">Deniz</label>
            <p className="form-control mt-1">
              Oh that sounds great, I would also like to see Istanbul. Can I join your trip?
            </p>
          </div>

          <div className="form-group mt-3">
            <label className="userRight">Nyusha</label>
            <p className="form-control mt-1">
              Yes for sure.
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