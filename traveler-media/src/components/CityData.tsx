import "../styles.css"
<<<<<<< HEAD


const CityData= (props:any) => {
  if(props.props.name === ''){
    return (
      <div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Click on a country to see more info</h3>
              </div>
          </form>
      </div>
=======
export default function(){
 
  return (
    <div>
        <h1>
            Hallo
        </h1>
    </div>
>>>>>>> 79a1bda1103e7dcd8037faea22c63a4a26f26026
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
export default CityData;