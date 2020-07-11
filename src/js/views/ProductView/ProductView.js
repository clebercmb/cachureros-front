import React, { useState, useEffect, useContext } from "react" 
import "./ProductView.css"
import { Context } from "../../store/appContext";

import ProductLargePhoto from '../../component/ProductLargePhoto/ProductLargePhoto'
import ProductSmallPhoto from '../../component/ProductSmallPhoto/PhotoSmallPhoto'
import ProductSmallMediumPhotos from '../../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto'

const ProductView = props => {

    const { store, actions } = useContext(Context);


    useEffect(() => {
		console.log("Behavior before the component is added to the DOM");
		console.log("props.match.params.id", props.match.params.id);

        actions.setInfoBar(true, 'Comentarios', 'Valoraciones')
	}, []);

    return (
        <div className='productview-container'>
            <div className='productview-a'>
                <div className='productview-a-01'>
                    <div className='productview-a-01-01'>
                        <ProductLargePhoto src='/images/Imagen Muestra.png' alt='Prouduct Photo'/>    
                    </div>
                    <div className='productview-a-01-02'>    
                        <ProductSmallPhoto src='/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 6.png' alt='Prouduct Photo'/>   
                        <ProductSmallPhoto src='/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 7.png' alt='Prouduct Photo'/>   

                        <ProductSmallPhoto src='/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 8.png' alt='Prouduct Photo'/>   

                        <ProductSmallPhoto src='/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 9.png' alt='Prouduct Photo'/>   
                    </div>
                </div>
                <div className='productview-a-02'>
                    <div className='productview-a-02-01'>
                        <label className='productview-a-02-01-description'>
                            Zapatillas deportivas transpirables a la moda para hombre y mujer
                        </label>

                        <div className='productview-a-02-01-a'>  
                            <label className='productview-a-02-01-discount'>
                                <strike>$ 40.000</strike>
                            </label>

                            <label className='productview-a-02-01-price'>
                                $ 23.000
                            </label>
                        </div>
                        <div className='productview-a-02-01-b'> 
                            <button className='button-green'>Agregar al Carrito</button>
                            <button className='button-blue bid'>Realizar Oferta</button>
                        </div>

                        <div className='productview-a-02-01-c'> 
                            <label className='productview-a-02-01-c-detail'> <strong>Detalles del Producto:</strong></label>
                            <div className='productview-a-02-01-c-detail-a'>
                                <div className='productview-a-02-01-c-01'>
                                    <label className='productview-a-02-01-c-01-a'>
                                        Marca: Ruko
                                    </label>
                                    
                                    <label className='productview-a-02-01-c-01-a'>
                                        Color: Verde Amerillo
                                    </label>                        
                                </div>
                                <div className='productview-a-02-01-c-01'>
                                    <label className='productview-a-02-01-c-01-a' >
                                        Modelo: Deportiva
                                    </label>
                                    <label className='productview-a-02-01-c-01-a'>
                                        Talla: 41
                                    </label>
                                </div>
                                <div className='productview-a-02-01-c-01'>
                                    <label className='productview-a-02-01-c-01-a' >
                                        Condición: Nuevo
                                    </label>
                                    <label className='productview-a-02-01-c-01-a'>
                                        Cantidad: 1
                                    </label>
                                </div>     
                            </div>                      
                        </div>
                    </div>
                    <div className='productview-a-02-02'>
                        <div className='userProfile-item-left-item-01'> 
                            <img src='/images/tendita-juanita.png' alt="Juanita Photo" className="photo-tendita" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='productview-b'>
                <label><strong>Productos relacionados</strong></label>
            </div>
            <div className='productview-c'>
                    <ProductSmallMediumPhotos src='/images/Hee79dcebf31a47f2b483 2.png' alt='Product Name' price='12.000CLP' name='Zapatilla Ingland'/>

                    <ProductSmallMediumPhotos src='/images/4c10f6caade55663e34b2699d4353c18 2.png' alt='Product Name' price='12.000CLP' name='Zapatilla Ingland'/>

                    <ProductSmallMediumPhotos src='/images/15kg-Conjunto- 4.png' alt='Product Name' price='12.000CLP' name='Zapatilla Ingland'/>

                    <ProductSmallMediumPhotos src='/images/15kg-Conjunto- 5.png' alt='Product Name' price='12.000CLP' name='Zapatilla Ingland'/>

                    <ProductSmallMediumPhotos src='/images/15kg-Conjunto- 6.png' alt='Product Name' price='12.000CLP' name='Zapatilla Ingland'/>

                    <ProductSmallMediumPhotos src='/images/15kg-Conjunto- 7.png' alt='Product Name' price='12.000CLP' name='Zapatilla Ingland'/>
            </div>

        </div>

    )
}

export default ProductView