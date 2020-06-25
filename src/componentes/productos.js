import React, { Component } from "react";

export const Productos = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card mt-3">
              <img src="/img/cuchillos.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">$ 20.000</h5>
                <p className="card-text">
                  Nombre de Producto
                </p>
                <a href="#" className="btn btn-primary">
                  Ver producto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
