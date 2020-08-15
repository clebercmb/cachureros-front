import React, { useState, useContext } from "react";
import Productos from '../productos'
import { Context } from "../../store/appContext";
import "./Shoppingcart.css";

function ShoppingCart(props) {

  const { store, actions } = useContext(Context);

  function removeFromCart(prod) {
    console.log('>>> removeFromCart:', prod)
  }

  const prodcart = () => {
    const urlImages = process.env.REACT_APP_BACK_IMAGES
    return store.userCart.products.map((prod) => (
      <div key={prod.id} className="listProductos">
        <div className='listProductos-01 cart-product'>        
          <img className="imagenProducto cart-product" src={urlImages+prod.photos[0]} />
        </div>

        <div className="listProductos-02 cart-product">
          <p className='productname'>{prod.name}</p>
          <div className="precioDescuento">
            <p className="precioNormal">{prod.originalPrice}</p>
            <p className="descuento">{prod.price}</p>
          </div>
          <input
            type="text"
            className="cart-product-amount"
            placeholder="Cantidad"
            id='amount'
            name="amount"
            onChange={e => props.handleQty(e,prod)}
            value={prod.amount}
            pattern='[0-9]+'

          />
          <div>
              <button className="btn cart-product" onClick={() => removeFromCart(prod)}>
                  <i className="fas fa-trash-alt" />
              </button>
          </div>
        </div>
      </div>

    ));
  };

  return <div className="productosAgregados">{prodcart()}</div>;
}

export default ShoppingCart;
