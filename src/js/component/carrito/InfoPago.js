import React from "react";
import "../../../styles/InfoPago.css";

function InfoPago() {
  return (
    <>
      <div className="Infopago">
        <h1 className="tituloInfopago">Métodos de Pagos</h1>
        <div className="ejemplospagocabecera">
          <div className="ejemplospago">
            <p>TRANSFERENCIA <br/> BANCARIA</p>
            <p>TRANSFERENCIA  <br/> BANCARIA</p>
            <>TRANSFERENCIA <br/> BANCARIA</>
          </div>
          <div className="ejemplosseguro">
            <p>Tarjeta de creditos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPago;
