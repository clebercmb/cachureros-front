import React from 'react'
import './SellsCard.css'

const SellsCard = (props) => {
    let urlImages = process.env.REACT_APP_BACK_IMAGES
    return(
        <div className="container-sells-card">
            <div className='sells-card-img'>
                <img src={urlImages+props.img} alt="Product Photo"/>
            </div>

            <label className="sells-card-name">{props.name}</label>
            <label className="sells-card-total-amount">{props.totalAmount}</label>
            <label className="sells-card-total-price">${props.totalPrice}</label>
        </div>
    )
}

export default SellsCard