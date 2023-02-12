import "../styles.css"
import { useHistory } from "react-router-dom";




const CountryData= (props:any) => {
   const history = useHistory();
    if(props.props.clickedCity !== ''){
    
       history.push(`/ShowProfile/${props.props.clickedCity}`)
       history.go(0)
    }
  if(props.props.name === ''){
    return (
      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Click on a country to see more info</h3>
              </div>
          </form>
      </div>
  )
  }
  else 
  return (
      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title"><img src={props.props.Image}  className="flag-img"/></h3>
                  <h2 className="Country-name">{props.props.name}</h2>
                  <h3 className="Auth-form-title">Capital: {props.props.capital}</h3>
                  <h3 className="Auth-form-title">Population: {props.props.population}</h3>
                  <h3 className="Auth-form-title">Currencies: {props.props.currencies}</h3>
                  <h3 className="Auth-form-title">Languages: {props.props.languages}</h3>
              </div>
          </form>
      </div>
  )
}
export default CountryData;
