import React, { useState, useEffect, useContext } from "react"
import OrderProductCard from '../../component/OrderProductCard/OrderProductCard'
import { Context } from "../../store/appContext";
import './SellOrderView.css'
const SellOrderView = (props) => {

    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        order: undefined
    })

    const [sellOrder, setSellOrder] = useState({})
    const [productOrderList, setProductOrderList] = useState([])

    useEffect(() => {
        console.log("SellOrderView.userEffect (1):Behavior before the component is added to the DOM");
        console.log("SellOrderView.userEffect (1):props.match.params.userStoreId", props.match.params.userStoreId);
        console.log("SellOrderView.userEffect (1):props.match.params.orderId", props.match.params.orderId);

        fetchOrder(props.match.params.userStoreId, props.match.params.orderId)
        fetchProductOrder(props.match.params.userStoreId, props.match.params.orderId)
        //props.history.push("/");
    }, []);

    async function fetchOrder(userStoreId, orderId) {
        console.log("SellOrderView.fetchOrder");
        console.log("SellOrderView.fetchOrder.env", process.env);
        console.log("SellOrderView.fetchOrder.process.env.REACT_APP_URL", process.env.REACT_APP_URL)

        let url = process.env.REACT_APP_URL + `/user-store/${userStoreId}/sell/${orderId}`

        console.log("SellOrderView.fetchOrder.url", url)

        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("SellOrderView.fetchOrder.data=", data);
                setSellOrder(data);
                console.log("SellOrderView.fetchOrder.sellOrder=", sellOrder);

                actions.setInfoBar(true, 'Venta: ', orderId)

            })
            .catch((error) => {
                console.log("SellOrderView.fetchOrder.error", error);
            });

        console.log("SellOrderView.fetchOrder.userMessages", store.userMessages);

        return store.userMessages
    }

    async function fetchProductOrder(userStoreId, orderId) {
        console.log("SellOrderView.fetchProductOrder");
        console.log("SellOrderView.fetchProductOrder.env", process.env);
        console.log("SellOrderView.fetchProductOrder.process.env.REACT_APP_URL", process.env.REACT_APP_URL)

        let url = process.env.REACT_APP_URL + `/user-store/${userStoreId}/sell/${orderId}/product-order/`

        console.log("SellOrderView.fetchProductOrder.url", url)

        await fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("SellOrderView.fetchProductOrder.data=", data);
                setProductOrderList(data);
                console.log("SellOrderView.fetchProductOrder.productOrderList=", productOrderList);

            })
            .catch((error) => {
                console.log("SellOrderView.fetchProductOrder.error", error);
            });

        console.log("SellOrderView.fetchProductOrder.userMessages", store.userMessages);

        return store.userMessages
    }


    let productList = []
    let total = 0;
    let flete = 0
    console.log('>>>##SellOrderView.productOrderList (1)=', productOrderList)

    if (productOrderList && productOrderList.length > 0) {

        productList = productOrderList.map((prod, i) => {
            console.log('OrderView.prod=', prod.flete)
            total += prod.amount * prod.price
            flete += prod.amount * prod.flete
            return (
                <OrderProductCard key={prod.id} img={prod.urlPhoto} name={prod.name} amount={prod.amount} price={prod.price} flete={prod.flete} />
            )
        })
    }

    console.log('>>>##SellOrderView.sellOrder (1)=', sellOrder)
    console.log('>>>##SellOrderView.sellOrder.userName=', sellOrder.userName)
    console.log('>>>##SellOrderView.sellOrder (2)=', sellOrder)

    console.log('>>>##SellOrderView.productOrderList (2)=', productOrderList)

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
                        <p>Nombre: {sellOrder.userName}</p>
                        <p>Dirección: {sellOrder && sellOrder.address}-{sellOrder && sellOrder.region}</p>
                        <p>Phone: {sellOrder && sellOrder.phone}</p>
                    </div>

                </div>

                <div className="order-view-payment">
                    <div className="order-view-summary-title">
                        <h5>Payment Option</h5>
                    </div>
                    <div className='order-view-payment-data'>
                        <p>{sellOrder && sellOrder.paymentOption}</p>
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
                            <h3>${total + flete}</h3>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SellOrderView