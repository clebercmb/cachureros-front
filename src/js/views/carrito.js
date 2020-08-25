import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import InformationBar from "../component/InformationBar/InformationBar";
import ShoppingCart from "../component/carrito/Shoppingcart"

import ResumenCompra from "../component/carrito/resumenCompra";
import InfoPago from "../component/carrito/InfoPago";
import ProductSmallMediumPhotos from "../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto";
import "../../styles/carrito.css";

function Carrito(props) {
  const { store, actions } = useContext(Context);
  const {history} = props
  const [state, setState] = useState({
    userName: "clebermb",
    userStore: {},
    showAllFilter: true,
    total:0,
    flete:0
  });

  useEffect(() => {
    console.log("UserStoreView useEffect 2: Behavior before the component is added to the DOM");

    actions.setInfoBar(true, `Carrito`)

    console.log("UserStoreView.useEffect 2.store.userStore", store.contacts);
    setState({ ...state, userStore: store.userStore });
   // actions.setInfoBar(store.userStore.userName);
    console.log("UserStoreView.useEffect 2.state.userStore", state.userStore);
    calcTotal()

  }, [store.userStore]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('>>carrito.handleOnSubmit')
    console.log('>>carrito.handleOnSubmit.store.login.data=', store.login.data)

    if (store.login.data)
      history.push('/resumen-pedidos')
    else
      history.push('/login')
  }

  function handleQty(e, prod) {
    console.log('handleQty=e.target.value=', e.target.value)
    console.log('>>> handleQty (Before):', prod)

    prod['amount'] = e.target.value
    console.log('>>> handleQty (After):', prod)
    actions.addProductToCart(prod)
    calcTotal()
  }

  function calcTotal() {
    console.log('>>>carrito.calcTotal')

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

  return (
    <form className="containerCarrito" onSubmit={e => handleSubmit(e)}>
      <div className="carrito">
        <ShoppingCart handleQty={handleQty} />
        <ResumenCompra total={state.total} flete={state.flete}/>
      </div>
      <div className="metodosPago">
        <InfoPago />
      </div>

      <div>
        <h4 className=" mt-5 ml-5 ">Productos relacionados</h4>
        <div className="productview-c mt-3 ml-5 mr-5">
          <ProductSmallMediumPhotos
            src="/images/Hee79dcebf31a47f2b483 2.png"
            alt="Product Name"
            price="12.000CLP"
            name="Zapatilla Ingland 9898979"
          />

          <ProductSmallMediumPhotos
            src="/images/4c10f6caade55663e34b2699d4353c18 2.png"
            alt="Product Name"
            price="12.000CLP"
            name="Zapatilla Ingland"
          />

          <ProductSmallMediumPhotos
            src="/images/15kg-Conjunto- 4.png"
            alt="Product Name"
            price="12.000CLP"
            name="Zapatilla Ingland"
          />

          <ProductSmallMediumPhotos
            src="/images/15kg-Conjunto- 5.png"
            alt="Product Name"
            price="12.000CLP"
            name="Zapatilla Ingland"
          />

          <ProductSmallMediumPhotos
            src="/images/15kg-Conjunto- 6.png"
            alt="Product Name"
            price="12.000CLP"
            name="Zapatilla Ingland"
          />

          <ProductSmallMediumPhotos
            src="/images/15kg-Conjunto- 7.png"
            alt="Product Name"
            price="12.000CLP"
            name="Zapatilla Ingland"
          />
        </div>
      </div>
    </form>
  );
}
export default Carrito;
