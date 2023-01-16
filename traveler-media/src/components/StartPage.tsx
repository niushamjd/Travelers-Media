import undrawTravel from './undraw_traveling_qio0.svg';
export default function() {
    return (
        <div className="travel-container">
            
            <img src={undrawTravel} alt="Travelers pic" />
            <div className=''>
            <h1>Welcome to Traveler Media</h1>
            <h2>Join travelers around the world:</h2>
            <a href="/SignIn"><button className="btn btn-secondary">Sign In</button></a>
            <a href="/SignUp"> <button className="btn btn-secondary">Sign Up</button></a>
            </div>
            
            </div>
    )
}