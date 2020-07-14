import React from "react"
import './ProductSmallMediumPhoto.css'

import { Link } from "react-router-dom";

const ProductSmallMediumPhoto = (props) => {

    return (

        <div className='product-small-medium-photo'> 
            <Link to= {`/product-view/${props.id}`} className="product-small-medium-photo-link">        
                <img src={props.src} alt={props.alt} className="product-small-medium-photo-img"/>
            </Link>
            <label className='product-small-medium-photo-price'>{props.price}</label>
            <label className='product-small-medium-photo-name'>{props.name}</label>
        </div>
    )

}
export default ProductSmallMediumPhoto
