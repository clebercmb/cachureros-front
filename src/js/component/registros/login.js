import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/login.css";
import { Context } from '../../store/appContext';

const Login = (props) => {

  const {history} = props;
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({
    login: {
      email:{},
      password:{}
    }
  });

  useEffect(() => {
    console.log("Login useEffect 1: Behavior before the component is added to the DOM");
    console.log("Login.useEffect 1.props.user_store", props.match.params);
    //actions.fetchRegionList();
  }, []);

  function handleChange(e, field) {
    console.log("***login.handleChange=",field)
    console.log('login.handleChange.e=',e)
    const {value} = e.target;
    console.log("***login.handleChange.value=", value)

    let login = state.login
    login[field] = value

    setState({...state, login: login});
  }

  let  handleSubmit = (e) =>  {
    console.log("****>login.handleSubmit")
    let login = state.login
    console.log("****>login.handleSubmit.login=", login)

    actions.fetchLogin(login, history)

    
/*     let url = process.env.REACT_APP_URL+'/login/'
    let methodCall = 'POST'
    console.log("login.handleSubmit.url=", url)
    console.log("login.handleSubmit.methodCall=", methodCall)
    fetch(url, {
        method: methodCall,
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("login.handleSubmit.data", data);
      localStorage.setItem("login", data);
    })
    .catch((error) => {
      console.log("login.handleSubmit.error", error);
    });
     */

}   

  return (
    <div className="containerLogin">
      <div className="opcioncerrar">
        <p>x</p>
      </div>

      <div className="logo1">
        <img src="images/Cachurero.png" alt='Logo Cachurero' />
      </div>

      <div className="opcionesregistro">
        <Link to="/registro" className="registropciones1">REGISTRARSE</Link>
        <a  href="#" className="registroinicio1">INICIA SESIÓN</a>
      </div>

      <form className="box">
        <input type="text" id="email" name="email" placeholder="Introduce tu email"  className="boxregistro" onChange={e => handleChange(e, 'email')}/>
        <input type="password" id="password" name="password" placeholder="Contraseña"  className="boxregistro" onChange={e => handleChange(e, 'password')}/>
        <input type="button" id="fname" name="fname" value="Soy Cachurero"  className="botonregistro" onClick={e => handleSubmit(e)}/>
        <a href="#">¿Olvidaste tu contraseña?</a>
      </form>

      <p className="terminos">Al crear una cuenta estás aceptando el <span>Acepto los términos 
          y condiciones</span> de Cacurero.cl y <span>Política de Privacidad</span></p>

      <div>
          <p className="redesociales" >Acceso rápido con</p>  
          <div className="fabredes">
          <i className="fab fa-facebook"></i>  
          <i className="fab fa-instagram"></i>  
          <i className="fab fa-google"></i>  
          </div>     
      </div>   

    </div>
  )
}

export default Login;
