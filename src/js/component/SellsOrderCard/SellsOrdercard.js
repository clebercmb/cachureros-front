import React from 'react'
import { Link } from "react-router-dom";
import './SellsOrderCard.css'

const SellsOrderCard = (props) => {
    let urlImages = process.env.REACT_APP_BACK_IMAGES
    return(

        <Link to={`/my-store/${props.userStoreId}/sell/${props.orderId}`} className="dropdown-item sells-order-card-menu">
            <div className="container-sells-order-card">
                <div className='sells-order-card-img sells-order-card-item'>
                    <img src={urlImages+props.img} alt="User Photo" className='sells-order-card-item'/>
                </div>

                <label className="sells-order-card-id">{props.orderId}</label>
                <label className="sells-order-card-amount">{props.totalAmount}</label>
                <label className="sells-order-card-price">${props.totalPrice}</label>
                <label className="sells-order-card-date">{props.createdAt}</label>
                <label className="sells-order-card-status">{props.status}</label>
            </div>
        </Link>


    )
}

export default SellsOrderCard