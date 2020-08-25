import React, {useState, useEffect, useContext} from 'react'
import "../../../styles/registrouser.css";
import { Link } from 'react-router-dom';
import {Context} from '../../store/appContext'

const RegistroUsuario = (props) => {

  const {history} = props;
  const {store, actions} = useContext(Context)

  let {state, setState} = useState({
    msgError:null,
    login:{
      name: '',
      email: '',
      password: ''
    }
  })

  
  useEffect(() => {
    console.log("RegistroUsuario useEffect 1: Behavior before the component is added to the DOM");
    console.log("RegistroUsuario.useEffect 1.props.user_store", props.match.params);
    //actions.fetchRegionList();
  }, []);

  let handleChange = (e, field) => {
    console.log("***RegistroUsuario.handleChange=",field)
    console.log('RegistroUsuario.handleChange.e=',e)
    const {value} = e.target;
    console.log("***RegistroUsuario.handleChange.state=", state)
    console.log("***RegistroUsuario.handleChange.name=", e.name)
    console.log("***RegistroUsuario.handleChange.value=", value)
    console.log("***RegistroUsuario.handleChange.check=", e.target.checked)
    console.log("***RegistroUsuario.handleChange.type=", e.target.type)

    if (state == undefined) {
      console.log('"***RegistroUsuario: state undefined')
      return
    }

    console.log(e.target.id,":",value);
    let newState = state
    let login = newState.login
    login[field] = value

    newState.login  = login

    setState(newState) 

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
        <a href="#" className="registropciones">REGISTRARSE</a>
        <Link to="/login" className="registroinicio">INICIA SESIÓN</Link>
      </div>

      <form className="box">
        <input type="text" id="name" name="name" placeholder="Nombre y Apellidos" className="boxregistro" required value={state && state.name} onChange={e => handleChange(e, 'name')} />
        <input type="email" id="email" name="fname" placeholder="Introduce tu email" className="boxregistro" required value={state && state.email} onChange={e => handleChange(e, 'email')}/>
        <input type="password" id="password" name="password" placeholder="Contraseña" className="boxregistro" required value={state && state.password} onChange={e => handleChange(e, 'password')}/>
        <input type="button" id="fname" name="fname" value="Registrarme" className="botonregistro" onClick={e => handleSubmit(e)}/>
        <a>¿Olvidaste tu contraseña?</a>
      </form>

      <p className="terminos">Al crear una cuenta estás aceptando el <span>Acepto los términos y condiciones</span> de Cacurero.cl y <span>Política de Privacidad</span></p>

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

export default RegistroUsuario