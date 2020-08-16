import React, {useState, useEffect, useContext} from 'react'
import './SellsView.css'

import '../../component/SellsCard/SellsCard'
import { Context }  from "../../store/appContext";
import SellsCard from '../../component/SellsCard/SellsCard';


const SellsView = (props) => {

    const [state, setState] = useState({
        sells:[]
    })

    const { store, actions } = useContext(Context);    
    useEffect(()=> {
        actions.setInfoBar(true, 'Ventas', '')
        console.log("UserProfile.userEffect (1):Behavior before the component is added to the DOM");
		console.log("UserProfile.userEffect (1):props.match.params.id", props.match.params.id);
	
        fetchSells(props.match.params.id)


    }, [])

    async function fetchSells(userStoreId) {
        console.log("SellsView.fetchOrder");
        console.log("SellsView.fetchOrder.env", process.env);
        console.log("SellsView.fetchOrder.process.env.REACT_APP_URL", process.env.REACT_APP_URL)
    
        let url = process.env.REACT_APP_URL+`/user-store/${userStoreId}/sells`

        console.log("SellsView.fetchOrder.url", url)

        await fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("SellsView.fetchOrder.data", data);
            setState({ ...state, sells: data });
           
        })
        .catch((error) => {
            console.log("SellsView.fetchOrder.error", error);
        });

        console.log("SellsView.fetchOrder.userMessages", store.userMessages);

        return store.userMessages

    }

    let productList = []
    let totalAmount = 0;
    let totalPrice = 0
    if( state.sells) {
        productList = state.sells.map((prod, i) => {
            console.log('SellsView.prod=', prod)
            totalAmount +=  prod.totalAmount
            totalPrice +=  prod.totalPrice

            return (
                <SellsCard img={prod.urlPhoto} key={prod.id} name={prod.name} totalAmount={prod.totalAmount} totalPrice={prod.totalPrice}/>
            )    
        })
    }


    return(
        <div className="container-sells-view">  
            <div className="sells-view">      
                <div className="sells-view-01 sells-view-prods">
                    <div className="sells-view-title">
                        <h5>Productos Vendidos</h5>
                    </div>

                    <div className="sells-view-prods-items">
                        {productList}
                    </div>
                </div>

                <div className="sells-view-01 sells-view-summary">
                    <div className="sells-view-title">
                        <h5>Resumen</h5>
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
            </div>
        </div>
    )
}


export default SellsView