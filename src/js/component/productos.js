import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ShoppingCart from './carrito/Shoppingcart'
import ProductCard from '../component/ProductCard/ProductCard'

import "../../styles/productos.css";

function Productos() {
  const { store, actions } = useContext(Context);
  const [boxAdd, setboxAdd] = useState([])
  const [product, setproduct] = useState([])

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
  
  let listProduct 
  
  if(product){
    console.log('>>>productos.product=', product)
    const urlImages = process.env.REACT_APP_BACK_IMAGES
    listProduct = () => {
      return product.map((prod) => (
        <ProductCard key={prod.id} urlImages={urlImages} prod={prod} addProduct={actions.addProductToCart}/>
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
