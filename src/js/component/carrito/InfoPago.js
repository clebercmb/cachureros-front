import React from "react";
import "../../../styles/InfoPago.css";


function InfoPago() {
  return (
    <>

      <div className="Infopago">

        <div className="titulosPagos">
          <h5 className="mt-3">Métodos de Pagos</h5>
          <h5 className="mt-3">Pago seguro</h5>
        </div>

        <div className="cabecera">
          <div className="pago">
            <div className="mediosPago">
              <p className="borderPago">TRANSFERENCIA BANCARIA</p>
              <img className="borderPago" src="img/kipuoriginal.png" />
              <img className="borderPago" src="img/paypaloriginal.png" />
            </div>
          </div>

          <div className="separador"> <img src="img/Line9.png"/> </div>

          <div className="pagoSeguro">
            <div className="seguroContenido">
              <img className="sizeImagen" src="img/escudo.png" />
              <p className="sizeText">
                Recibe un reembolso de tu dinero si el artículo no llega o es
                diferente al de la descripción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPago;
