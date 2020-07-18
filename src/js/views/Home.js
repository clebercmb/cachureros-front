import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import  Productos from "../component/productos";
import { Promocion } from "../component/promocion";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/1725.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Productos />
      <Promocion />
    </>
  );
};
