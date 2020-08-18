import React, {useState, useEffect, useContext} from 'react'
import './SellsView.css'

import '../../component/SellsProductCard/SellsProductCard'
import { Context }  from "../../store/appContext";
import SellsProductCard from '../../component/SellsProductCard/SellsProductCard';
import SellsOrderCard from '../../component/SellsOrderCard/SellsOrdercard'

const SellsView = (props) => {

    const [state, setState] = useState({
        sells:[],
        orders:[]
    })

    const [sells, setSells] = useState([])    
    const [orders, setOrders] = useState([]) 

    const { store, actions } = useContext(Context);    
    useEffect(()=> {
        actions.setInfoBar(true, 'Ventas', '')
        console.log("UserProfile.userEffect (1):Behavior before the component is added to the DOM");
        console.log("UserProfile.userEffect (1):props.match.params.id", props.match.params.id);
        
        fetchProductSells(props.match.params.id)
        fetchOrders(props.match.params.id)

    }, [])

     function fetchProductSells(userStoreId) {
        console.log("SellsView.fetchProductSells");
        console.log("SellsView.fetchProductSells.env", process.env);
        console.log("SellsView.fetchProductSells.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/user-store/${userStoreId}/sells-by-product`

        console.log("SellsView.fetchProductSells.url", url)

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("SellsView.fetchProductSells.data", data);
            setSells(data);
        })
        .catch((error) => {
            console.log("SellsView.fetchProductSells.error", error);
        });

        console.log("SellsView.fetchProductSells.userMessages", store.userMessages);

        return store.userMessages

    }

    function fetchOrders(userStoreId) {
        console.log("SellsView.fetchOders");
        console.log("SellsView.fetchOders.env", process.env);
        console.log("SellsView.fetchOders.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/user-store/${userStoreId}/sell`
        console.log("SellsView.fetchOders.url", url)

        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("SellsView.fetchOders.data", data);
            setOrders(data);
        })
        .catch((error) => {
            console.log("SellsView.fetchOders.error", error);
        });

        console.log("SellsView.fetchOders.userMessages", store.userMessages);

        return store.userMessages

    }

    console.log(">>##SellsView.sells=", sells);
    console.log(">>##SellsView.orders=", orders);

    let productList = []
    let totalAmount = 0;
    let totalPrice = 0
    if( sells) {
        productList = sells.map((prod, i) => {
            console.log('SellsView.prod=', prod)
            totalAmount +=  prod.totalAmount
            totalPrice +=  prod.totalPrice

            return (
                <SellsProductCard img={prod.urlPhoto} key={prod.id} name={prod.name} totalAmount={prod.totalAmount} totalPrice={prod.totalPrice}/>
            )    
        })
    }

    let orderList = []
    if( orders) {
        orderList = orders.map((order, i) => {
            console.log('SellsView.order=', order)
            return (
                <SellsOrderCard img={order.photoUrl} key={order.orderId} userStoreId={actions.getLogin().data.user.userStore.id} orderId={order.orderId} totalAmount={order.totalAmount} totalPrice={order.totalPrice} createdAt={order.createdAt} status='Enviado'/>
                )    
        })
    }


    return(
        <div className="container-sells-view">  
            <div className="sells-view">      
                <div className="sells-view-01 sells-view-orders">
                    <div className="sells-view-title">
                        <h5>Últimas Ventas</h5>
                    </div>
                    <div className="sells-view-orders-items-titles">
                        <div className='sells-view-orders-items-titles-img'></div>
                        <label className="sells-view-orders-items-titles-order">Venta Id</label>
                        <label className="sells-view-orders-items-titles-amount">Itens</label>
                        <label className="sells-view-orders-items-titles-price">Valor</label>
                        <label className="sells-view-orders-items-titles-date">Fetcha</label>
                        <label className="sells-view-orders-items-titles-status">Status</label>

                    </div>

                    <div className="sells-view-orders-items">
                        {orderList}
                    </div>
                </div>

                <div className="sells-view-01 sells-view-summary">

                    <div className='sells-view-summary-value'>
                        <div className="sells-view-title">
                            <h5>Resumen Totales</h5>
                        </div>

                        <div className="sells-view-summary-items">
                            <div className="sells-view-summary-items-01">
                                <label className="sells-view-total-label">Itens Vendidos:</label>
                                <label className="sells-view-total-value">{totalAmount}</label>
                            </div>
                            <div className="sells-view-summary-items-01">
                                <label className="sells-view-total">Total:</label>
                                <label className="sells-view-total-value">${totalPrice}</label>
                            </div>
                        </div>
                    </div>

                    <div className='sells-view-summary-products'>
                        <div className="sells-view-title">
                            <h5>Resumen por Producto</h5>
                        </div>
                        <div className="sells-view-summary-items">
                            <div className="sells-view-summary-items-02">
                                {productList}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default SellsView