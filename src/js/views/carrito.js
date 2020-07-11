import React from "react";
import ShoppingCart from "../component/carrito/Shoppingcart";
import ResumenCompra from "../component/carrito/resumenCompra"
import InfoPago from "../component/carrito/InfoPago"

import '../../styles/carrito.css'

function Carrito() {
  return (
    <>
    <div className="carrito">
      <ShoppingCart />
      <ResumenCompra />
    </div>
    <div className="metodosPago">
        <InfoPago />
    </div>
    
    </>
  );
}
export default Carrito;
