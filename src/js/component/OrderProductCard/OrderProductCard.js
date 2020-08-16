import React from 'react'
import './OrderProductCard.css'

const OrderProductCard = (props) => {

    const urlImages = process.env.REACT_APP_BACK_IMAGES
    return(
        <div className="container-order-product-card">
            <div className='order-product-card'>
                <div className='order-product-card-div'>
                    <img src={urlImages+props.img} alt="Product Photo" className="order-product-card-img order-product-item"/>
                </div>
                <label className="order-product-card-name">{props.name}</label>
                <label className="order-product-card-amount">{props.amount}</label>
                <label className="order-product-card-price">${props.price}</label>
                {/* <label className="order-product-card-flete">${props.flete}</label> */}
            </div>
            {/* <div className='order-product-card-breakline'></div> */}
        </div>
    )
}

export default OrderProductCard