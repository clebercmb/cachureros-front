import React, {useState, useEffect, useContext} from "react"
import OrderProductCard from '../../component/OrderProductCard/OrderProductCard'
import { Context } from "../../store/appContext";
import './OrderView.css'
const OrderView = (props) => {

    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        order:undefined
    })

    
    useEffect(() => {
		console.log("OrderView.userEffect (1):Behavior before the component is added to the DOM");
		console.log("OrderView.userEffect (1):props.match.params.id", props.match.params.id);
	
        fetchOrder(props.match.params.id)

		//props.history.push("/");
	}, []);


    async function fetchOrder(id) {
        console.log("OrderView.fetchOrder");
        console.log("OrderView.fetchOrder.env", process.env);
        console.log("OrderView.fetchOrder.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/order/${id}/products`

        console.log("OrderView.fetchOrder.url", url)

        await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("OrderView.fetchOrder.data", data);
            setState({ ...state, order: data });
            actions.setInfoBar(true, 'Pedido: ', data.id)

        })
        .catch((error) => {
            console.log("OrderView.fetchOrder.error", error);
        });

        console.log("OrderView.fetchOrder.userMessages", store.userMessages);

        return store.userMessages

    }
    
    
    let productList = []
    let total = 0;
    let flete = 0
    if( state.order) {
        console.log('OrderView.order=',  state.order)
        console.log('OrderView.order.flete=',  state.order.flete)
        flete = state.order.flete
        productList = state.order.products.map((prod, i) => {
            console.log('OrderView.prod=',  prod.flete)
            total +=  prod.amount * prod.price
            return (
                <OrderProductCard key={prod.Product.id} img={prod.Product.photos[0]} name={prod.Product.name} amount={prod.amount} price={prod.price} flete={prod.flete}/>
            )    
        })
    }


    return (
        <div className='container-order-view'>
            <div className="order-view-data">
                <div className="order-view-user">
                    <div className='order-view-summary-title'>
                        <h5>
                            Información de envío: 
                        </h5>
                    </div>

                    <div className=''>
                        <p>Nombre: {state.order && state.order.user.name}</p>
                        <p>Dirección: {state.order && state.order.address}-{state.order && state.order.region.name}</p>
                        <p>Phone: {state.order && state.order.phone}</p>
                    </div>

                </div>

                <div className="order-view-payment">
                    <div className="order-view-summary-title">
                        <h5>Payment Option</h5>
                    </div>
                    <div className='order-view-payment-data'>
                        <p>{state.order && state.order.paymentOption.name}</p>
                    </div>
                </div>

            </div>
            <div className="order-view">
 
                <div className="order-view-products">
                <div className='order-view-summary-title'>
                        <h5>
                            Itens del Pedido: 
                        </h5>
                    </div>
                    {productList}
                </div>

                <div className="order-view-summary">
                    <div className="order-view-summary-title">
                        <h5>Resumen del Pedido</h5>
                    </div>
                    <div className="order-view-summary-values">
                        <div className="order-view-summary-subtotal">
                            <label className="subtotal">Subtotal</label>
                            <label className="subtotal-value">$ {total}</label>
                        </div>

                        <div className="order-view-summary-flete">
                            <label className="flete-label">Flete</label>
                            <label className="flete-value">${flete}</label>                        
                        </div>  

                        <div className="order-view-summary-breakline">
                        </div>  

                        <div className="order-view-summary-total">
                            <h3>Total</h3>
                            <h3>${total+flete}</h3>
                        </div>  

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderView