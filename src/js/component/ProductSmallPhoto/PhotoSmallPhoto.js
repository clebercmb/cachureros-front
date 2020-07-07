import React from 'react'

import "./ProductSmallPhoto.css"

const ProductSmallPhoto = (props) => {
    return (
        <div className=''>
            <img src={props.src} alt={props.alt} className="product-small-photo"/>
        </div>
    )
}

export default  ProductSmallPhoto