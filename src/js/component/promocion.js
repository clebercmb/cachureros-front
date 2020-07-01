import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/promocion.css";

export const Promocion = () => {
  return (
    <div className="contenedor">
      <div className="contenedorLeft">
        <div className="contenedorLeftTop">
          <h4 className="contenedorLeftTop_titulo">PROMOCIÓN DE JUNIO</h4>
          <h2 className="contenedorLeftTop_descuento">50%</h2>
        </div>
        <div className="contenedorLeftContenido">
          <p>
            KDEAM Rectangular Ultra ligero TR90 gafas de sol hombres TAC
            polarizado 1,1mm de espesor lente gafas de sol de conducción mujeres
            deportes Cat.3
          </p>
          <a href="#" className="botonVerPromo">
            {" "}
            Ver Promoción{" "}
          </a>
          <div className="cronometro">
            <p>00</p>
            <p>00</p>
            <p>00</p>
          </div>
        </div>
      </div>

      <div className="contenedorRight">
        <img src="/img/lente_1.png" alt="..." className="promoImagen" />
      </div>
    </div>
  );
};
