import React from 'react'
import "../../../styles/registrouser.css";
import { Link } from 'react-router-dom';

class RegistroUsuario extends React.Component{
    render(){
        return(
            <div className="containerLogin">
        <div className="opcioncerrar">
          <p>x</p>
        </div>

        <div className="logo1">
          <img src="images/Cachurero.png" />
        </div>

        <div className="opcionesregistro">
          <a href="#" className="registropciones">REGISTRARSE</a>
          <Link to="/login" className="registroinicio">INICIA SESIÓN</Link>
        </div>

        <form className="box">
          <input type="text" id="fname" name="fname" placeholder="Nombre y Apellidos"  className="boxregistro" required/>
          <input type="email" id="fname" name="fname" placeholder="Introduce tu email"  className="boxregistro" required/>
          <input type="text" id="fname" name="fname" placeholder="Contraseña"  className="boxregistro" required/>
          <input type="button" id="fname" name="fname" value="Registrarme"  className="botonregistro"/>
          <a>¿Olvidaste tu contraseña?</a>
        </form>

        <p className="terminos">Al crear una cuenta estás aceptando el <span>Acepto los términos 
           y condiciones</span> de Cacurero.cl y <span>Política de Privacidad</span></p>

        <div>
           <p className="redesociales" >Acceso rápido con</p>  
           <div className="fabredes">
           <i class="fab fa-facebook"></i>  
           <i class="fab fa-instagram"></i>  
           <i class="fab fa-google"></i>  
           </div>     
        </div>   

      </div>
        )
    }
}

export default RegistroUsuario