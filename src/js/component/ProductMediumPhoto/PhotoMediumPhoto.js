import React from 'react'

const PhotoSmallPhoto = (props) => {
    return (
        <div className='photo-small-photo-container'>

            <div className="card mt-3 mb-3">
                <img
                src="/images/cuchillos.jpg"
                className="card-img-top"
                alt="..."
                />
                <div className="card-body">
                <h5 className="card-title">Nombre producto</h5>
                <p className="card-text">$ 20.000</p>
                <a href="#" className="btn btn-primary">
                    Ver
                </a>
                </div>
            </div>
        </div>
    )
}

export default PhotoSmallPhoto