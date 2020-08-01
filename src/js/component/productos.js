import React, { useState, Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/productos.css";

function Productos() {
  const { store, actions } = useContext(Context);
  const [product, setproduct] = useState([
    {
      id: 1,
      title: "Arrimo",
      precio: "$ 40.000",
      img: "img/mesa 1.png",
    },
    {
      id: 2,
      title: "Bateria",
      precio: "$ 10.000",
      img: "img/bateria.png",
    },
    {
      id: 3,
      title: "Reloj de Hombre",
      precio: "$ 8.000",
      img: "img/reloj.png",
    },
    {
      id: 4,
      title: "Botas de Nieves",
      precio: "$ 140.000",
      img: "img/botas.png",
    },
    {
      id: 5,
      title: "Polera de Algodon",
      precio: "$ 5.000",
      img: "img/poleras.png",
    },
    {
      id: 6,
      title: "Horno",
      precio: "$ 17.000",
      img: "img/hornos.png",
    },
    {
      id: 7,
      title: "Teclado y Mouse",
      precio: "$ 22.000",
      img: "img/teclado.png",
    },
    {
      id: 8,
      title: "Juego de mancuernas",
      precio: "$ 25.000",
      img: "img/mancuernas.png",
    },
    {
      id: 9,
      title: "Product 9",
      precio: "$ 25.000",
      img: "img/mancuernas.png",
    }
    
  ]);

  const addProductToCart = (productId, cartId) =>{

    console.log("products.addProductToCart")
    console.log(productId, cartId)

    let product = {
      "price": 10000,
	    "amount": 1,
      "productId": productId,
      "cartId": cartId
    }

    actions.fetchAddCart(product)

  }

  let listProduct 
  console.log(product)
  
  if(product){

    listProduct = () => {
      return product.map((prod) => (
        <div className="col-md-3">
          <div className="card mt-3 mb-3 ml-2  mr-2 p-2">
            <img src={prod.img} className="card-img-top" alt="..." />
            <div className="card-body">
      <h5 className="card-title mt-1">{prod.title}</h5>
              <p className="card-text">{prod.precio}</p>
              <a href="#" className="btn btn-primary mt-3" onClick={() => addProductToCart(prod.id, store.userCart.id)}>
                Agregar
              </a>
            </div>
          </div>
        </div>
      ));
    };
  
  }

  
  return (
    <div>
      <div className="container">
        <div className="row">{listProduct()}</div>
      </div>
    </div>
  );
}

export default Productos;
