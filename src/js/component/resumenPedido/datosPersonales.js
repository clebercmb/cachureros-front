import React from "react";
import "../../../styles/DatosPersonales.css";
import SelectList from '../resumenPedido/select-list'

class DatosPersonales extends React.Component {
  render() {
    return (
      <div className="informenvio">
        <form>
          <div className="franjainformenvio">
            <h5>Información de envío</h5>
          </div>

          <div className="contacto-envio">
            <p className="contact-title">Contacto:</p>
            <div className="contact">
              <input
                type="text"
                placeholder="Nombre y apellidos"
                className="input-contact"
              />
              <input
                type="text"
                placeholder="Teléfono"
                className="input-contact"
              />
            </div>
          </div>

          <div className="contacto-envio-dir">
            <p className="contact-title">Dirección:</p>
            <div className="contact">
              <input
                type="text"
                placeholder="Calle"
                className="input-contact"
              />
              <input
                type="text"
                placeholder="Número, Piso, Dpto"
                className="input-contact"
              />
            </div>

            <div className="contact-2">
              <input
                type="text"
                placeholder="Chile"
                className="input-contact-1"
              />

<select className="input-contact-2" name="region">
              <option value="selection">Región</option>
              <option value="Tarapaca">Tarapacá</option>
              <option value="Antofagasta">Antofagasta</option>
              <option value="Atacama">Atacama</option>
              <option value="arica">Arica y Parinacota</option>
              <option value="biobio">Bío-Bío</option>
              <option value="coquimbo">Coquimbo</option>
              <option value="araucania">La Araucanía</option>
              <option value="lagos">Los Lagos</option>
              <option value="rios">Los Ríos</option>
              <option value="magallanes">Magallanes</option>
              <option value="maule">Maule</option>
              <option value="santiago">Metropolitana de Santiago</option>
              <option value="nuble">Ñuble</option>
              <option value="higgins">O’Higgins</option>
              <option value="valparaiso">Valparaíso</option>
              </select>

              <select className="input-contact-2" name="comuna">
              <option value="selection">Comuna</option>
              <option value="Tarapaca">Tarapacá</option>
              <option value="Antofagasta">Antofagasta</option>
              <option value="Atacama">Atacama</option>
              <option value="arica">Arica y Parinacota</option>
              <option value="biobio">Bío-Bío</option>
              <option value="coquimbo">Coquimbo</option>
              <option value="araucania">La Araucanía</option>
              <option value="lagos">Los Lagos</option>
              <option value="rios">Los Ríos</option>
              <option value="magallanes">Magallanes</option>
              <option value="maule">Maule</option>
              <option value="santiago">Metropolitana de Santiago</option>
              <option value="nuble">Ñuble</option>
              <option value="higgins">O’Higgins</option>
              <option value="valparaiso">Valparaíso</option>
              </select>
            </div>

            <div className="boton">
                <button className="button-blue">Confirmar</button>
                <button className="button-green">Cancelar</button>
            </div>



          </div>
        </form>
      </div>
    );
  }
}
export default DatosPersonales;
