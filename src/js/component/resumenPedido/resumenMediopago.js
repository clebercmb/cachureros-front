import React from "react";
import "../../../styles/resumenmediopago.css"

function Resumenmediopago(props) {
  return (
    <div className="informepago mt-3">

        <div className="franjainformenvio">
          <h5>Métodos de Pago:</h5>
        </div>

        <div className="pagomedios">
          <div className="transferencia">
            <input type="radio" name="pago" id='paymentOption1' value={1} onChange={(e)=>props.handleField(e, 'paymentOptionId')} checked={props.order.paymentOptionId==1 ? 'checked': ''}/>
            <label htmlFor='paymentOption1' className="ml-3 mt-3">TRANSFERENCIA BANCARIA</label>
          </div>
          <div className="transferencia">
            <input type="radio" name="pago" id='paymentOption2' value={2} onChange={(e)=>props.handleField(e, 'paymentOptionId')}/>
            <img htmlFor='paymentOption2' className="ml-3" src="img/paypaloriginal.png" />
          </div>
          <div className="transferencia">
            <input type="radio" name="pago" id='paymentOption3' value={3} onChange={(e)=>props.handleField(e, 'paymentOptionId')}/>
            <img htmlFor='paymentOption3' className="ml-3" src="img/kipuoriginal.png" />
          </div>
        </div>

    </div>
  );
}
export default Resumenmediopago;
