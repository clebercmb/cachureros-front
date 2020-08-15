import React, {useState, useContext, useEffect} from "react";
import "../../../styles/resumenCompra.css";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";

const ResumenCompra = (props) =>  {

  const { store, actions } = useContext(Context);

  let [state, setState] = useState({
    total:0,
    flete:0
  });

  useEffect(() => {
    console.log("ResumenCompra.useEffect 1-Behavior before the component is added to the DOM ")
    console.log("ResumenCompra.useEffect 1-store.userCart:", store.userCart)
    let newState = state
    newState.total = 0
    newState.flelte = 0

    console.log("ResumenCompra.useEffect 1-store.userCart.products.length:", store.userCart.products.length)

    for(let i=0; i< store.userCart.products.length; i++) {
      let prod = store.userCart.products[i]
      console.log("ResumenCompra.useEffect 1-prod.amount,prod.price:", prod.amount,prod.price)
      newState.total += prod.amount * prod.price
      newState.total += prod.amount * prod.flete
    }
    console.log("ResumenCompra.useEffect 1-newState:", newState)
    console.log("ResumenCompra.useEffect 1-state (Before):", state)
    setState({...state, total:newState.total});
    console.log("ResumenCompra.useEffect 1-state (After):", state)


  }, [store.userCart]);
  
  return (
    <div className="resumenCompra">
      <div className="tituloResumenCompra">
        <h1>Resumen del Pedido</h1>
      </div>
      <div className="contenidosresumencompra">
        <div className="subtotal">
          <p>Subtotal</p>
          <p>${props.total}</p>
        </div>
        <div className="subtotal">
          <p>Envío</p>
          <p>${props.flete}</p>
        </div>
        <hr></hr>
        <div className="total">
          <p>Total</p>
          <p>${props.total+props.flete}</p>
        </div>
        <div className="comprar">
          <button className="button-green">COMPRAR</button>
          {/* <Link to='/resumen-pedidos'>
          <button className="button-green">COMPRAR</button>
          </Link>
          */}
        </div>
        
      </div>
    </div>
  );
}
export default ResumenCompra;
