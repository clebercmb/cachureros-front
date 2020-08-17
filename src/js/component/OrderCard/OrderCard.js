import React from 'react'
import './OrderCard.css'
import { Link } from "react-router-dom";

const OrderCard = (props) => {
    return (
        <div className='container-order-card'>
            <div className='sub-container-order-card'>
                <div className='container-order-card-01'>
                    <Link to={`/order/${props.id}`}>
                        <label>Pedido-{props.id}</label>
                    </Link>
                </div>

                <div className="container-order-card-02">
                    <Link to={`/order/${props.id}`}>
                        <label>{props.date}</label>
                    </Link>
                </div>

                <div className="container-order-card-03">
                    <Link to={`/order/${props.id}`}>
                        <label className='container-order-card-04-a'>{props.status}</label>
                    </Link>
                </div>
            
            </div>

        </div>
    )
}

export default OrderCard