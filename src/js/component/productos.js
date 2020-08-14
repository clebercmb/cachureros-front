import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ShoppingCart from '../component/carrito/Shoppingcart'

import "../../styles/productos.css";

function Productos() {
  const { store, actions } = useContext(Context);
  const [boxAdd, setboxAdd] = useState([])
  const [product, setproduct] = useState([])
 /*  const [product, setproduct] = useState([
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
 */

  useEffect(()=>{
		console.log("UserProfile.userEffect (1):Behavior before the component is added to the DOM");
		console.log("UserProfile.userEffect (1):product=", product);
		console.log("UserProfile.userEffect (1):store.useStore=", store.useStore);

		fetchAllProduct()

  }, [])



  async function fetchAllProduct() {
    console.log("products.fetchAllProduct");
    console.log("products.fetchAllProduct.env", process.env);
    console.log("products.fetchAllProduct.process.env.REACT_APP_URL2", process.env.REACT_APP_URL)

    let url = process.env.REACT_APP_URL+`/product/`
    
    console.log("products.fetchAllProduct.url", url)

    //let product = {}
  
    await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("products.fetchAllProduct.data", data);
        let product = data;
        setproduct(product);
        console.log("products.fetchAllProduct.product", product);

      })
      .catch((error) => {
        console.log("products.fetchAllProduct.error", error);
      });


    return 

  }

  const addProductToCart= (prod) =>{
    var datas = prod;
    boxAdd.push(prod)
    console.log(boxAdd)
  }
  
  let listProduct 
  
  if(product){
    console.log('>>>productos.product=', product)
    const urlImages = process.env.REACT_APP_BACK_IMAGES
    listProduct = () => {
      return product.map((prod) => (
        <div key={prod.id} className="col-md-3">
          <div className="card mt-3 mb-3 ml-2  mr-2 p-2">
            <img src={urlImages+prod.photos[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title mt-1">{prod.name}</h5>
              <p className="card-text">{prod.price}</p>
              <a href="#" className="btn btn-primary mt-3" onClick={() => addProductToCart(prod)}>
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
