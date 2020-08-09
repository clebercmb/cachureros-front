import React from 'react'

import "./ProductLargePhoto.css"

const ProductLargePhoto = (props) => {
    console.log('ProductLargePhoto.props=',props)
    return (
        <div className='product-large-photo-container'>
            <img src={props.endpoint+props.src} alt={props.alt} className="product-large-photo" onClick={() => props.onclick(props.index)}/>
        </div>
    )
}

export default  ProductLargePhoto