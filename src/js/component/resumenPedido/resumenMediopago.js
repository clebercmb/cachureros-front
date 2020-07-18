import React from "react";
import "../../../styles/resumenmediopago.css"

function Resumenmediopago() {
  return (
    <div className="informepago mt-3">
      <form>
        <div className="franjainformenvio">
          <h5>Métodos de Pago</h5>
        </div>

        <div className="pagomedios">
          <div className="transferencia">
            <input type="radio" name="pago"  />
            <p className="ml-3 mt-3">TRANSFERENCIA BANCARIA</p>
          </div>
          <div className="transferencia">
            <input type="radio" name="pago" />
            <img className="ml-3" src="img/paypaloriginal.png" />
          </div>
          <div className="transferencia">
            <input type="radio" name="pago"  />
            <img className="ml-3" src="img/kipuoriginal.png" />
          </div>
        </div>

        <div className="boton mt-1">
          <button className="button-blue">Confirmar</button>
          <button className="button-green">Cancelar</button>
        </div>
      </form>
    </div>
  );
}
export default Resumenmediopago;
