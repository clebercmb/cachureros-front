import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Productos from "../component/productos";
import { Promocion } from "../component/promocion";
import "../../styles/Home.css";

export const Home = () => {
  return (
    <>
      <div className="containerHome">
        <img src="/img/1725.jpg" className="imagenBanner" alt="..." />
      </div>

      <div className="containerProduct">
        <Productos />
        <Promocion />
      </div>
    </>
  );
};
