import React, { useState, useEffect, useContext } from "react"
import { Context } from '../store/appContext';
import InformationBar from "../component/InformationBar/InformationBar";
import ShoppingCart from "../component/carrito/Shoppingcart";
import ResumenCompra from "../component/carrito/resumenCompra";
import InfoPago from "../component/carrito/InfoPago";
import ProductSmallMediumPhotos from "../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto";
import "../../styles/carrito.css";




function Carrito() {

  const { store, actions } = useContext(Context);

  const [state, setState] = useState({
		userName: "clebermb",
        userStore: {},
        showAllFilter: true
	});

  useEffect(() => {
    console.log(
      "UserStoreView useEffect 2: Behavior before the component is added to the DOM"
    );
    console.log("UserStoreView.useEffect 2.store.userStore", store.contacts);
    setState({ ...state, userStore: store.userStore });
    actions.setInfoBar(true, "Carrito de compra", store.userStore.userName);
    console.log("UserStoreView.useEffect 2.state.userStore", state.userStore);
  }, [store.userStore]);

  return (
    <>
   
      <div className="carrito">
        <ShoppingCart />
        <ResumenCompra />
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
            name="Zapatilla Ingland"
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
    </>
  );
}
export default Carrito;
