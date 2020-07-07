import React from "react"
import './ProductMediumNanoPhotos.css'

const ProductMediumNanoPhotos = (props) => {

    return (
        <div>
            <img src={props.src} alt={props.alt} className="product-small-photo"/>
        </div>
    )

}
export default ProductMediumNanoPhotos
