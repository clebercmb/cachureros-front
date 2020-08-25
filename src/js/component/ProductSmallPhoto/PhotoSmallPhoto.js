import React from 'react'

import "./ProductSmallPhoto.css"

const ProductSmallPhoto = (props) => {
    return (
        <div className=''>
            <img src={props.endpoint+props.src} alt={props.alt} className="product-small-photo" onClick={() => props.onclick(props.index)}/>
        </div>
    )
}

export default  ProductSmallPhoto