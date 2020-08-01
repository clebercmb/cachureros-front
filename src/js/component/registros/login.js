import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/login.css";

class Login extends React.Component {
  render() {
    return (
      
        <div className="containerLogin">
          <div className="opcioncerrar">
            <p>x</p>
          </div>

          <div className="logo1">
            <img src="images/Cachurero.png" alt="Logo Cachurero" />
          </div>

          <div className="opcionesregistro">
            <Link to="/registro" className="registropciones1">
              REGISTRARSE
            </Link>
            <a href="#" className="registroinicio1">
              INICIA SESIÓN
            </a>
          </div>

          <form className="box">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Introduce tu email"
              className="boxregistro"
            />
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Contraseña"
              className="boxregistro"
            />
            <input
              type="button"
              id="fname"
              name="fname"
              value="Soy Cachurero"
              className="botonregistro"
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
          </form>

          <p className="terminos">
            Al crear una cuenta estás aceptando el{" "}
            <span>Acepto los términos y condiciones</span> de Cacurero.cl y{" "}
            <span>Política de Privacidad</span>
          </p>

          <div>
            <p className="redesociales">Acceso rápido con</p>
            <div className="fabredes">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-google"></i>
            </div>
          </div>
        </div>
     
    );
  }
}

export default Login;
