import React from "react"
import './ProductSmallMediumPhoto.css'

const ProductSmallMediumPhoto = (props) => {

    return (
        <div className='product-small-medium-photo'>
            <img src={props.src} alt={props.alt} className="product-small-medium-photo"/>
            <label className='product-small-medium-photo-price'>{props.price}</label>
            <label className='product-small-medium-photo-name'>{props.name}</label>
        </div>
    )

}
export default ProductSmallMediumPhoto
