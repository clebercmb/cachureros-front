import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/registrouser.css";
import { Context } from '../../store/appContext';

const Register = (props) => {

  const {history} = props;
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({
    login: {
      name:{},
      email:{},
      password:{}
    }
  });

  useEffect(() => {
    console.log("Register.useEffect 1: Behavior before the component is added to the DOM");
    console.log("Register.useEffect 1: props.user_store", props.match.params);
    //actions.fetchRegionList();
  }, []);

  let handleChange = (e, field) => {
    console.log("***Register.handleChange=",field)
    console.log('Register.handleChange.e=',e)
    const {value} = e.target;
    console.log("***Register.handleChange.value=", value)

    let login = state.login
    login[field] = value

    console.log(`***Register.handleChange.${field}.value=`, state.login[field])

    setState({...state, login: login});
  }
  
  let handleSubmit = (e) =>  {
    console.log("****>registroUser.handleSubmit")
    
    console.log("****>registroUser.handleSubmit.state=", state)

    let url = process.env.REACT_APP_URL+'/register/'
    console.log("registroUser.handleSubmit.url="+url)

    let methodCall = 'POST'

    let login = state.login

    console.log("registroUser.handleSubmit.methodCall=", methodCall)
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
      console.log("registroUser.handleSubmit.data", data);
      localStorage.setItem("login", data);

      actions.setLogin(data);
      console.log('registroUser.handleSubmit.store.login=', store.login)

    })
    .catch((error) => {
      console.log("registroUser.handleSubmit.error", error);
    });    
    
    history.push("/");

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
        <a to="/registro" className="registropciones">REGISTRARSE</a>
        <Link  href="#" className="registroinicio">INICIA SESIÓN</Link>
      </div>

      <form className="box">

        <input type="text" id="name" name="name" placeholder="Nombre y Apellidos"  className="boxregistro" onChange={e => handleChange(e, 'name')}/>
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

export default Register;
