import React from "react";
import InformationBar from "../component/InformationBar/InformationBar"
import DatosPersonales from "../component/resumenPedido/datosPersonales";
import ResumenCompra from "../component/carrito/resumenCompra"
import Resumenmediopago from "../component/resumenPedido/resumenMediopago"
import "../../styles/resumenCompra.css"

function ResumenPedidos() {
  return (
    <>
    <InformationBar/>
    <div className="resumenpedido">
        <div>
        <DatosPersonales />
        <Resumenmediopago/>
        </div>
        <ResumenCompra/>
    </div>
    
    
    </>
  );
}
export default ResumenPedidos;
