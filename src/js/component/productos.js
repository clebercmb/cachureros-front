import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/productos.css";
class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Arrimo",
          precio: "$ 40.000",
          img: "img/mesa 1.png",
        },
        {
          id: 1,
          title: "Bateria",
          precio: "$ 10.000",
          img: "img/bateria.png",
        },
        {
          id: 1,
          title: "Reloj de Hombre",
          precio: "$ 8.000",
          img: "img/reloj.png",
        },
        {
          id: 1,
          title: "Botas de Nieves",
          precio: "$ 140.000",
          img: "img/botas.png",
        },{
          id: 1,
          title: "Polera de Algodon",
          precio: "$ 5.000",
          img: "img/poleras.png",
        },{
          id: 1,
          title: "Horno",
          precio: "$ 17.000",
          img: "img/hornos.png",
        },{
          id: 1,
          title: "Teclado y Mouse",
          precio: "$ 22.000",
          img: "img/teclado.png",
        },{
          id: 1,
          title: "Juego de mancuernas",
          precio: "$ 25.000",
          img: "img/mancuernas.png",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            {this.state.data.map((productos) => {
              return (
                <div className="col-md-3">
                  <div className="card mt-3 mb-3">
                    <img
                      src={productos.img}
                      className="card-img-top"
                      alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{productos.title}</h5>
                      <p className="card-text">{productos.precio}</p>
                      <a href="#" className="btn btn-primary">
                        Comprar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Productos;
