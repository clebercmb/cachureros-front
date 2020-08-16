import React, {useEffect, useState, useContext} from "react";
import InformationBar from "../component/InformationBar/InformationBar"
import DatosPersonales from "../component/resumenPedido/datosPersonales";
import ResumenCompra from "../component/carrito/resumenCompra"
import Resumenmediopago from "../component/resumenPedido/resumenMediopago"
import "../../styles/resumenCompra.css"
import { Context } from "../store/appContext";

function ResumenPedidos(props) {

  const {history} = props
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({
    userName: "clebermb",
    userStore: {},
    showAllFilter: true,
    total:0,
    flete:0,
    responseMessage: '',
    order:{
      userId: 1,
      regionId: 1,
      paymentOptionId:1,
      products: [],
      flete: 0,
      name:'',
      address: '',
      phone: ''
    }

  });

  useEffect(() => {
    console.log("resumenPedidos.useEffect 1: Behavior before the component is added to the DOM");

    actions.setInfoBar(true, `Carrito`)

    console.log("resumenPedidos.useEffect-1.state (Before):", state);

    let newState = state
    newState.order.userId = actions.getLogin().data.user.id
    if(actions.getLogin().data.user.userStore.region)
      newState.order.regionId = actions.getLogin().data.user.userStore.region.id
    else
      newState.order.regionId = 1
    newState.order.name=actions.getLogin().data.user.name
    newState.order.address=actions.getLogin().data.user.address
    newState.order.phone=actions.getLogin().data.user.phone

    if (newState.order.regionId === undefined)
      newState.order.regionId = 1

    setState({...state, order:newState.order});
    console.log("resumenPedidos.useEffect-1.state (After):", state);
    fillOrder()

  }, []);
  
  useEffect(() => {
    console.log("resumenPedidos.useEffect-2: Behavior before the component is added to the DOM");

    actions.setInfoBar(true, `Carrito`)
    setState({ ...state, userStore: store.userStore });
    console.log("resumenPedidos.useEffect-2.state.userStore", state.userStore);

    calcTotal()
  }, [store.userStore]);


  useEffect(() => {
    console.log("resumenPedidos.useEffect-3: Behavior before the component is added to the DOM");
  
    fillOrder()
    calcTotal()
  }, [store.userCart]);

  function fillOrder() {
    console.log('>>>fillOrder')

    let newState = state
    let flete = 0
    console.log('fillOrder.store.userCart.products.length=', store.userCart.products.length)
    newState.order.products=[]
    for(let i=0; i<store.userCart.products.length; i++) {
      console.log('fillOrder.products (i)=>',i, store.userCart.products[i])
      let cartProduct = store.userCart.products[i]
      let prod = {
        productId: cartProduct.id,
        price: cartProduct.price,
        amount: cartProduct.amount
      } 
      flete += cartProduct.amount * cartProduct.flete
      newState.order.products.push(prod)
    }
    newState.order.flete=flete

    setState({ ...state, order: newState.order });

    console.log("resumenPedidos.fillOrder.state", state);

  }


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
		setState({...state, order:newState.order}); 
	}


  function handleField(e, field) {
    console.log('>>resumenPedidos.handleField.field=', field) 
    const {value} = e.target
    console.log('>>resumenPedidos.handleField.value=', value) 
    let newState = state
    newState.order[field] = value
    console.log('>>resumenPedidos.handleField.state (Before)=', state) 
    console.log('>>resumenPedidos.handleField.newState=', newState) 
    setState({...state, order:newState.order})
    
    console.log('>>resumenPedidos.handleField.state (After)=', state) 
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('>>resumenPedidos.handleOnSubmit')
    fetchOrder()
  }

  async function fetchOrder ()  {
    console.log("****>resumenPedidos")

    let url = process.env.REACT_APP_URL+'/order/'
    console.log("resumenPedidos="+url)

    let methodCall = 'POST'

    console.log("resumenPedidos.methodCall=", methodCall)

    await fetch(url, {
        method: methodCall,
        body: JSON.stringify(state.order),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("resumenPedidos.data", data);
			let responseMessage = data
      setState({...state, responseMessage:responseMessage})
      console.log(">>resumenPedidos.responseMessage=", responseMessage);
      if( responseMessage.msg !== '') {
        //actions.resetUserCart()
        //history.push("/");
      }

  
    })
    .catch((error) => {
      console.log("resumenPedidos", error);
    });
  }

  console.log("resumenPedidos.state=", state)
  return (
    <>
    <form className="resumenpedido" onSubmit={e => handleSubmit(e)}>
        <div>
        <DatosPersonales handleField={handleField} order={state.order} responseMessage={state.responseMessage}/>
        <Resumenmediopago handleField={handleField} order={state.order}/>
        </div>
        <ResumenCompra total={state.total} flete={state.flete}/>
    </form>
    
    
    </>
  );
}
export default ResumenPedidos;
