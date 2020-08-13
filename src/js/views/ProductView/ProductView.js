import React, { useState, useEffect, useContext } from "react" 
import "./ProductView.css"
import { Context } from "../../store/appContext";

import ProductLargePhoto from '../../component/ProductLargePhoto/ProductLargePhoto'
import ProductSmallPhoto from '../../component/ProductSmallPhoto/PhotoSmallPhoto'
import ProductSmallMediumPhotos from '../../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto'

const ProductView = props => {

    const { store, actions } = useContext(Context);

	const [state, setState] = useState({
        product:{},
        principalPhoto:""
    });
    
    const [id, setId] = useState();
    
    
	useEffect(() => {
        console.log("ProductView useEffect 1: Behavior before the component is added to the DOM");
        console.log("ProductView.useEffect 1.props.match.params.id", props.match.params.id);
        actions.fetchProduct(props.match.params.id);
        console.log("ProductView.useEffect 1.store.product", store.product);
        setId(props.match.params.id)
        //actions.setInfoBar(true, 'Comentarios', 'Valoraciones', product.store.userPhoto)
        actions.setInfoBar(true, 'Comentarios', 'Valoraciones')

	}, []);

	useEffect(() => {
		console.log("ProductView useEffect 2: Behavior before the component is added to the DOM");
        console.log("ProductView.useEffect 2.store.product", store.product);
        
        let newState = state
        newState.product = store.product
        console.log("ProductView.useEffect 2.newState", newState);

        setState({
            ...state, 
            state: newState
        })

        let userPhoto = ''
 
		console.log("ProductView.useEffect 2.newState=", newState);
        console.log("ProductView.useEffect 2.state.product", state)

	}, [store.product]);


    let relatedProducts = state.product.relatedProducts
    console.log("ProductView.relatedProducts", relatedProducts)

    
    if (relatedProducts)
        relatedProducts = relatedProducts.map((p, i) => {
            return (
                <ProductSmallMediumPhotos src={p.photo} key={i} id={p.id} alt={p.name} price={`${p.price}CLP`} name={p.name}/>
            )
        })
        
            
    console.log("ProductView.relatedProducts(2)", relatedProducts)

    let changePhotoArray = (index) => {
        console.log('changePhotoArray.index=', index)

        let product =  state.product
        let aux = product.photos[0]
        product.photos[0] = product.photos[index]
        product.photos[index] = aux

        setState({
            ...state, 
            product: product
        })

        console.log('changePhotoArray.product=',product)
    }

    const urlImages = process.env.REACT_APP_BACK_IMAGES

    return (
        <div className='productview-container'>
            <div className='productview-a'>
                <div className='productview-a-01'>
                    <div className='productview-a-01-01'>
                        {state.product.photos && <ProductLargePhoto endpoint={urlImages} src={state.product.photos[0]} index={0} onclick={changePhotoArray} alt='Product Photo'/>}    
                    </div>
                    <div className='productview-a-01-02'>    
                        {state.product.photos && <ProductSmallPhoto endpoint={urlImages} src={state.product.photos[1]} index={1} onclick={changePhotoArray} alt='Small Product Photo 1'/>}   
                        {state.product.photos && <ProductSmallPhoto endpoint={urlImages} src={state.product.photos[2]} index={2} onclick={changePhotoArray} alt='Small Product Photo 2'/>}   
                        {state.product.photos && <ProductSmallPhoto endpoint={urlImages} src={state.product.photos[3]} index={3} onclick={changePhotoArray} alt='Small Product Photo 3'/>}   
                        {state.product.photos && <ProductSmallPhoto endpoint={urlImages} src={state.product.photos[4]} index={4} onclick={changePhotoArray} alt='Small Product Photo 4'/>}   
                    </div>
                </div>
                <div className='productview-a-02'>
                    <div className='productview-a-02-01'>
                        <label className='productview-a-02-01-description'>
                            {state.product.name}
                        </label>

                        <div className='productview-a-02-01-a'>  
                            <label className='productview-a-02-01-discount'>
                                <strike>$ {state.product.originalPrice}</strike>
                            </label>

                            <label className='productview-a-02-01-price'>
                                $ {state.product.price}
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
                                        Marca: {state.product.brand}
                                    </label>
                                    
                                    <label className='productview-a-02-01-c-01-a'>
                                        Color: {state.product.color}
                                    </label>                        
                                </div>
                                <div className='productview-a-02-01-c-01'>
                                    <label className='productview-a-02-01-c-01-a' >
                                        Modelo: {state.product.model}
                                    </label>
                                    <label className='productview-a-02-01-c-01-a'>
                                        Talla: {state.product && state.product.size && state.product.size.name && state.product.size.name}
                                    </label>
                                </div>
                                <div className='productview-a-02-01-c-01'>
                                    <label className='productview-a-02-01-c-01-a' >
                                        Condición: {state.product.condition}
                                    </label>
                                    <label className='productview-a-02-01-c-01-a'>
                                        Cantidad: {state.product.qty}
                                    </label>
                                </div>     
                            </div>                      
                        </div>
                    </div>
                    <div className='productview-a-02-02'>
                        <div className='userProfile-item-left-item-01'> 
                            {state.product.store && <img src={state.product.store.storePhoto} alt="Photo de la tendita" className="photo-tendita" />}
                        </div>
                    </div>
                </div>
            </div>
            <div className='productview-b'>
                <label><strong>Productos relacionados</strong></label>
            </div>
            <div className='productview-c'>
                {relatedProducts}
            </div>
            
        </div>   

    )
}

export default ProductView