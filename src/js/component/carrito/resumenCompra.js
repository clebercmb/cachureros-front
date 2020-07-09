import React from "react";
import "../../../styles/resumenCompra.css";

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
          <button className="comprar">COMPRAR</button>
        </div>
      </div>
    );
  }
}
export default ResumenCompra;
