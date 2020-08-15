import React, {useState, useEffect, useContext} from "react";
import { Context } from "../../store/appContext";

import "./DatosPersonales.css";
import SelectList from '../resumenPedido/select-list'

const DatosPersonales = (props) => {

  const { store, actions } = useContext(Context);

  useEffect(()=>{
    console.log("datosPersonales.userEffect (1):Behavior before the component is added to the DOM");
		actions.fetchRegionList()

  },[])
  

	

  console.log(">>datosPersonales.store.regionList=", store.regionList);
  const regionListOptions = store.regionList.map((region, i) => {
      return (
    <option key={region.id} id={region.id} value={region.id}>{region.name}</option>
      )    
  })  
  console.log(">>datosPersonales.regionListOptions=", regionListOptions);


  return (
    <div className="informenvio">
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

            <div className='form-group'>
              <p className="contact-title">Región:</p>
              <select name="region" id="region" value={store.login.data.user.userStore.region && store.login.data.user.userStore.region.id} className='form-control' onChange={e => props.handleRegion(e)}>
                {regionListOptions}
              </select>
            
            </div>

          </div>
        </div>
    </div>
  );
}
export default DatosPersonales;
