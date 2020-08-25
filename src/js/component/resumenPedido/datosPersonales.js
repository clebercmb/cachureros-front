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
        <h5>Información de envío:&nbsp;</h5>
        <label className='alert-message' >{props.responseMessage.msg}</label>
      </div>

      <div className="form-group datos-persnales-address">
        <label htmlFor='name' className="contact-title">Contacto:</label>
        <div className="contact">
          <input
            name='name'
            id='name'
            type="text"
            value={props.order.name}
            placeholder="Nombre y apellidos"
            className="input-contact"
            onChange={(e)=>props.handleField(e, 'name')}
            
          />
          <input
            name='phone'
            id='phone'
            type="text"
            value={props.order.phone}
            placeholder="Teléfono"
            className="input-contact"
            onChange={(e)=>props.handleField(e, 'phone')}
            
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor='address' className="contact-title">Dirección:</label>
        <input
          name='address'
          id='address'
          type="text"
          value={props.order.address}
          placeholder="Dirección"
          className="input-contact-address"
          onChange={(e)=>props.handleField(e, 'address')}
          
        />
      </div>

      <div className="form-group">
        <label htmlFor='region' className="contact-title">Región:</label>
        <select name="region" id="region" value={props.order.regionId} className='input-contact-region' onChange={(e)=>props.handleField(e, 'regionId')}>
              {regionListOptions}
        </select>
   
      </div>

    </div>
  );
}
export default DatosPersonales;
