import React, {useEffect, useState, useContext} from "react";
import InformationBar from "../component/InformationBar/InformationBar"
import DatosPersonales from "../component/resumenPedido/datosPersonales";
import ResumenCompra from "../component/carrito/resumenCompra"
import Resumenmediopago from "../component/resumenPedido/resumenMediopago"
import "../../styles/resumenCompra.css"
import { Context } from "../store/appContext";

function ResumenPedidos(props) {

  const { store, actions } = useContext(Context);
  const [state, setState] = useState({
    userName: "clebermb",
    userStore: {},
    showAllFilter: true,
    total:0,
    flete:0,

    order:{
      userId: 1,
      regionId: 1,
      products: [],
      flete: 1000,
      address: null,
      phone: null
    }

  });

  useEffect(() => {
    console.log("resumenPedidos.useEffect 2: Behavior before the component is added to the DOM");

    actions.setInfoBar(true, `Carrito`)

    console.log("resumenPedidos.useEffect 2.store.userStore", store.contacts);
    setState({ ...state, userStore: store.userStore });
   // actions.setInfoBar(store.userStore.userName);
    console.log("resumenPedidos.useEffect 2.state.userStore", state.userStore);
    calcTotal()
  }, [store.userStore]);


  function handleQty(e, prod) {
    console.log('resumenPedidos.handleQty=e.target.value=', e.target.value)
    console.log('>>> resumenPedidos.handleQty (Before):', prod)

    prod['amount'] = e.target.value
    console.log('>>> resumenPedidos.handleQty (After):', prod)
    actions.addProductToCart(prod)
    calcTotal()
  }

  function calcTotal() {
    console.log('>>>resumenPedidos.calcTotal')

    let newState = state
    newState.total = 0
    newState.flete = 0

    for(let i=0; i< store.userCart.products.length; i++) {
      let prod = store.userCart.products[i]
      newState.total += prod.amount * prod.price
      newState.flete += prod.amount * prod.flete
    }
    setState(newState);
  }

	function handleRegion(e) {
    console.log("***resumenPedidos.handleRegion")
    console.log('resumenPedidos.handleRegion.e=',e)
    const {value} = e.target; 
    console.log('resumenPedidos.handleRegion.value=',value)
		
		let regionId= parseInt(value)

    let newState = state
    newState.order.regionId= regionId
		setState(newState); 
	}

  function handleField(e) {
    console.log('>>resumenPedidos.handleField') 
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('>>resumenPedidos.handleOnSubmit')

  }

  return (
    <>
    <form className="resumenpedido" onSubmit={e => handleSubmit(e)}>
        <div>
        <DatosPersonales handleField={handleField}/>
        <Resumenmediopago/>
        </div>
        <ResumenCompra total={state.total} flete={state.flete} handleRegion={handleRegion}/>
    </form>
    
    
    </>
  );
}
export default ResumenPedidos;
