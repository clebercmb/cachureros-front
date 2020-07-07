import React from 'react'

import "./ProductLargePhoto.css"

const ProductLargePhoto = (props) => {
    return (
        <div className='product-large-photo-container'>
            <img src={props.src} alt={props.alt} className="product-large-photo"/>
        </div>
    )
}

export default  ProductLargePhoto