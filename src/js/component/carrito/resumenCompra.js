import React from "react";
import "../../../styles/resumenCompra.css";
import { Link } from "react-router-dom";

class ResumenCompra extends React.Component {
  render() {
    return (
      <div className="resumenCompra">
        <div className="tituloResumenCompra">
          <h1>Resumen del Pedido</h1>
        </div>
        <div className="contenidosresumencompra">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>$0</p>
          </div>
          <div className="subtotal">
            <p>Envío</p>
            <p>$0</p>
          </div>
          <hr></hr>
          <div className="total">
            <p>Total</p>
            <p>$0</p>
          </div>
          <div className="comprar">
            <Link to='/resumen-pedidos'>
            <button className="button-green">COMPRAR</button>
            </Link>
          
          </div>
          
        </div>
      </div>
    );
  }
}
export default ResumenCompra;
