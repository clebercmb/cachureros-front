import React, { useState, useEffect, useContext } from "react"
import './AddProductView.css'

import { Context } from "../../store/appContext";
import { updateInferTypeNode } from "typescript";
import DraggableUploader from "../../component/DraggableUploader/DraggableUploader"
import { useForm } from "react-hook-form";

const AddProductView = (props) => {

    

    const { store, actions} = useContext(Context);
    const {history} = props;

    const [state, setState] = useState({
        type:'',
        sucess: null,
        departmentList:[],
        categoryList:[],
        sizeList:[],
        productStateList:[],
        weightUnitList:[],
        respondMessage: '',
        photos:[
            '',
            '',
            '',
            '',
            ''
        ],
        images:[
            {src:'/images/camera.png', small:true},
            {src:'/images/camera.png', small:true},
            {src:'/images/camera.png', small:true},
            {src:'/images/camera.png', small:true},
            {src:'/images/camera.png', small:true},
        ]


    });
    
    function handleFilePhotoProduct(file, image, index) {
        console.log('AddProductView.handleFile.file=', file)
        console.log('AddProductView.handleFile.index=', index)

        //let photos = state.photos
        let newState = state
        newState.photos[index] = file
        newState.images[index].src = image
        newState.images[index].small = false
        setState({...state, state: newState});
        console.log('AddProductView.handleFilePhotoProduct.state.photos=', state.photos)
    }

    function handleChange(e, field) {
        console.log("***AddProductView.handleChange=",field)
        console.log('AddProductView.handleChange.e=',e)
        const {value} = e.target;
        console.log("***AddProductView.handleChange.name=", e.name)
        console.log("***AddProductView.handleChange.value=", value)
        console.log("***AddProductView.handleChange.check=", e.target.checked)
        console.log("***AddProductView.handleChange.type=", e.target.type)

        console.log(e.target.id,":",value);
        let product = store.product
        product[field] = value
        if(e.target.type === 'checkbox')
            product[field] = e.target.checked
    
        actions.setProduct(product); 

    }

    useEffect(() => {
		console.log("AddProductView.useEffect 1-Behavior before the component is added to the DOM")
        console.log("AddProductView.useEffect 1-props.match.params.id", props.match.params.id)
        actions.fetchDepartmentList()
        actions.fetchCategoryList()
        actions.fetchWeightUnitList()
        actions.fetchSizeList()
        actions.fetchProductStateList()
            
    }, []);
    
    useEffect(() => {
		console.log("AddProductView.useEffect 2-Behavior before the component is added to the DOM")

        let type = 'Nuevo'
        let product = state.product_inital_state
        
        if(props.match.params.id) {
            type = 'Modificar'
            actions.fetchProduct(props.match.params.id)
     } else {
            actions.resetProduct()
        }

        console.log('AddProductView.useEffect 1-type=', type)
        //setState({...state, type: type});

        console.log('AddProductView.useEffect 1-state.type=', state.type)
        actions.setInfoBar(true, `Registro del producto - ${type}`)

            
    }, [props.match.params.id]);

    useEffect(() => {
        console.log("AddProductView.useEffect-3-Behavior before the component is added to the DOM")
        console.log("AddProductView.useEffect-3-store.product=", store.product )
        const urlImages = process.env.REACT_APP_BACK_IMAGES
        console.log("AddProductView.useEffect-3.urlImages=", urlImages)
    

        if(store.product && store.product.id !== '') {
            let newState = state
            console.log("AddProductView.useEffect-3-store.product.photos.length=", store.product.photos.length )
            for (let i = 0; i< store.product.photos.length; i++) {
                console.log("AddProductView.useEffect-3-store.product.photos=", i, store.product.photos[i] )
                if (store.product.photos[i] !== ''){ 
                    newState.images[i].src = urlImages+store.product.photos[i]
                    newState.images[i].small = false
                }
                else {    
                    newState.images[i].src = '/images/camera.png'
                    newState.images[i].small = true
                }
            }
            setState({...state, state:newState})    
            
        console.log("AddProductView.useEffect-3-newState=", newState )
        console.log("AddProductView.useEffect-3-state=", state )
        }
        
    }, [store.product]);



    useEffect(() => {
		console.log("AddProductView.useEffect 2-Behavior before the component is added to the DOM - departmentList")
        console.log("useEffect 2-props.match.params.id", props.match.params.id)
        let departmentList = store.departmentList
        setState({...state, departmentList: departmentList});
    }, [store.departmentList]);

    useEffect(() => {
		console.log("AddProductView.useEffect 3-Behavior before the component is added to the DOM - categoryList")
        console.log("AddProductView.useEffect 3-props.match.params.id", props.match.params.id)
        let categoryList = store.categoryList
        setState({...state, categoryList: categoryList});
    }, [store.categoryList]);  // 

    useEffect(() => {
		console.log("AddProductView.useEffect 4-Behavior before the component is added to the DOM - sizeList")
        console.log("AddProductView.useEffect 4-props.match.params.id", props.match.params.id)
        let sizeList = store.sizeList
        setState({...state, sizeList: sizeList});
    }, [store.sizeList]);

    useEffect(() => {
		console.log("AddProductView.useEffect 5-Behavior before the component is added to the DOM - productStateList")
        console.log("AddProductView.useEffect 5-props.match.params.id", props.match.params.id)
        let productStateList = store.productStateList
        setState({...state, productStateList: productStateList});
    }, [store.productStateList]);

    useEffect(() => {
		console.log("AddProductView.useEffect 6-Behavior before the component is added to the DOM - categoryList")
        console.log("AddProductView.useEffect 6-props.match.params.id", props.match.params.id)
        let weightUnitList = store.weightUnitList
        setState({...state, weightUnitList: weightUnitList});
    }, [store.weightUnitList]);


    console.log("AddProductView.state.product(1)=", state.product)

    let addProduct = () => {
        let i = true
    }

    const departmentListOptions = state.departmentList.map((department, i) => {
        return (
            <option key={department.id} value={department.id}>{department.name}</option>
        )    
    })
    
    const categoryListOptions = state.categoryList.map((category, i) => {
        return (
            <option key={category.id} value={category.id}>{category.name}</option>
        )    
    })

    const sizeListOptions = state.sizeList.map((size, i) => {
        return (
            <option key={size.id} value={size.id}>{size.name}</option>
        )    
    })

    const productStateListOptions = state.productStateList.map((productState, i) => {
        return (
            <option key={productState.id} value={productState.id}>{productState.name}</option>
        )    
    })

    const weightUnitListOptions = state.weightUnitList.map((weightUnit, i) => {
        return (
            <option key={weightUnit.id} value={weightUnit.id}>{weightUnit.name}</option>
        )    
    })


    let  handleSubmit = (e) =>  {
        console.log("****>AddProductView.handleSubmit!")
        e.preventDefault();

        console.log("****>AddProductView.handleSubmit.state.product=", state.product)
        let formData = new FormData();

        formData.append("name", store.product.name);
        formData.append("price", store.product.price);
        formData.append("originalPrice", store.product.originalPrice);
        formData.append("hasBrand", store.product.hasBrand);
        formData.append("brand", store.product.brand);
        formData.append("color", store.product.color);
        formData.append("model", store.product.model);
        formData.append("weight", store.product.weight);
        formData.append("flete", store.product.flete);
        formData.append("weightUnitId", store.product.weightUnitId);
        formData.append("qty", store.product.qty);
        formData.append("photo0", state.photos[0]);
        formData.append("photo1", state.photos[1]);
        formData.append("photo2", state.photos[2]);
        formData.append("photo3", state.photos[3]);
        formData.append("photo4", state.photos[4]);
        formData.append("hasUpLoadPhotos", [state.photos[0]!= '', state.photos[1]!= '', state.photos[2]!= '', state.photos[3]!= '', state.photos[4]!= ''] )
        
        formData.append("departmentId", store.product.departmentId);
        formData.append("categoryId", store.product.categoryId);
        formData.append("sizeId", store.product.sizeId);
        formData.append("productStateId", store.product.productStateId);

        console.log('AddProductView.handleSubmit.store.login.data.user.userStore', store.login.data.user.userStore)
        formData.append("userStoreId", store.login.data.user.userStore.id);

        let url = process.env.REACT_APP_URL+'/product/'
        let methodCall = 'POST'
        console.log("AddProductView.handleSubmit.state.product.id=", store.product.id, store.product.id !== null, store.product.id!=='')
        if ( store.product.id !== null &&  store.product.id!=='' ) {
            url = process.env.REACT_APP_URL+'/product/'+ store.product.id
            methodCall = 'PUT'
        }
        console.log("AddProductView.handleSubmit.url=", url)
        console.log("AddProductView.handleSubmit.methodCall=", methodCall)
        fetch(url, {
            method: methodCall,
            body: formData, //JSON.stringify(state.product),
           // headers: {
           //     "Content-Type": "application/json"
           // }
        })
        .then(resp => resp.json())
        .then(data => {
            console.log('AddProductView.handleSubmit.data=',data)
            if(data.msg) {
                let newState = state
                newState.respondMessage = data.msg
                setState({...state, state:newState})
            }
        });
        //actions.resetProduct();
        //actions.resetUserStore();
        console.log("AddProductView.userStore (after reset)=", store.userStore)
        //history.push('/my-store/'+store.login.data.user.userStore.id);
        //history.push('/');

    } 

    console.log("AddProductView.store.product(2)=", store.product)
    console.log("AddProductView.state.product(2)=", state.product)
    console.log(">>>>AddProductView.process.env=", process.env)
    console.log(">>>>AddProductView.process.env.REACT_APP_BACK_IMAGES=", process.env.REACT_APP_BACK_IMAGES)
    
   
    return (
        <>
        {store.product && (
        <form className='form-group add-product-view-container' onSubmit={e => handleSubmit(e)}>
            <div className='add-product-view-a'>
                <div className='add-product-view-a-01'>
                    <DraggableUploader src={state.images[0].src} small={state.images[0].small} handleFile= {handleFilePhotoProduct} index={0} type='L'/>
                </div>            
                 <div className='add-product-view-a-02'>
                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.images[1].src} small={state.images[1].small} handleFile= {handleFilePhotoProduct} index={1} type='S'/>
                    </div>
                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.images[2].src} small={state.images[2].small} handleFile= {handleFilePhotoProduct} index={2} type='S'/>
                    </div>

                </div>  
                <div className='add-product-view-a-02'>

                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.images[3].src} small={state.images[3].small} handleFile= {handleFilePhotoProduct} index={3} type='S'/>
                    </div>
                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.images[4].src} small={state.images[4].small} handleFile= {handleFilePhotoProduct} index={4} type=''/>
                    </div>
                </div> 
            </div>
            <div className='add-product-view-b'>
                <p className='add-product-view-b-01'>¡Vender es bueno y a todos les gusta!</p>
                <p className='add-product-view-b-02'>Luce genial en tus fotos y descripción del producto</p>

                <label htmlFor='name' className='add-product-view-b-03'>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre y Apellidos"
                    id='name'
                    name='name' 
                    value={store.product && store.product.name}
                    onChange={e => handleChange(e, 'name')}
                    required
                />

                <label className='add-product-view-b-03'>Descripción</label>
                <textarea 
                id='description' 
                name='description'  
                className="form-control" 
                placeholder="Agregue una breve descripción de su producto" 
                
               />
                <label 
                className='add-product-view-b-03'
                style={{fontSize:"13px"}, {marginTop: "-10px"}}>Cantidad: 0/100</label>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='brand'>Marca</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Ingrese la marca"
                            id='brand'
                            name='brand'
                            style={{paddingLeft: "10px"}}
                            value={store.product.brand}
                            onChange={e => handleChange(e, 'brand')}
                           
                        />
                    </div>
                    <div>
                        <p><label htmlFor='model'>Modelo</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Ingrese el modelo"
                            id='model'
                            name='model'
                            style={{paddingLeft: "10px"}}
                            value={store.product.model}
                            onChange={e => handleChange(e, 'model')}
                            
                        />
                    </div>

                </div>

                <div className='add-product-view-b-05'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='hasBrand' className="container-checkbox">Sin Marca
                            <input  value={store.product.hasBrand} id='hasBrand' name='hasBrand' type="checkbox" onChange={e => handleChange(e, 'hasBrand')}/>
                            <span className="check"></span>
                        </label>
                    </div>
                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='price'>Precio</label></p>
                        <input
                            type="input"
                            className="add-product-view-b-04-01"
                            placeholder="Price"
                            id='price'
                            name='price'
                            style={{paddingLeft: "10px"}}
                            value={store.product.price}
                            onChange={e => handleChange(e, 'price')}
                            pattern='\d+(\.\d{2})?'
                            
                        />
                    </div>
                </div>
                
                

                <div className='add-product-view-b-06'>
                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='department'>Departamento</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Departamento"
                            id='department'
                            name='department'
                            value={store.product.departmentId}
                            onChange={e => handleChange(e, 'departmentId')}
                           
                        >
                            {departmentListOptions}
                        </select>
                    </div>
                    <div>
                        <p><label htmlFor='category'>Categoría</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Categoria"
                            id='category'
                            name='category'
                            value={store.product.categoryId}
                            onChange={e => handleChange(e, 'categoryId')}
                            
                        >
                            {categoryListOptions}
                        </select>
                    </div>
                </div>   

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='size'>Tamaño</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Tamaño"
                            id='size'
                            name='size'
                            value={store.product.sizeId}
                            onChange={e => handleChange(e, 'sizeId')}
                            
                        >
                            {sizeListOptions}
                        </select>
                    </div>
                    <div>
                        <p><label htmlFor='productState'>Estado del producto</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Estado del producto"
                            id='productState'
                            name='productState'
                            value={store.product.productStateId}
                            onChange={e => handleChange(e, 'productStateId')}
                        >
                            {productStateListOptions}                         
                        </select>
                    </div>

                </div> 

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='amount'>Cantidad</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Cantidad"
                            id='amount'
                            name='amount'
                            value={store.product.qty}
                            onChange={e => handleChange(e, 'qty')}
                        />
                    </div>
                    <div>
                        <p><label htmlFor='weight'>Peso del producto</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Peso del producto"
                            id='weight'
                            name='weight'
                            value={store.product.weight}
                            onChange={e => handleChange(e, 'weight')}
                        />
                    </div>
                </div> 

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='weightUnit'>Unid Peso producto</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Product weight unit"
                            id='weightUnit'
                            name='weightUnit'
                            value={store.product.weightUnitId}
                            onChange={e => handleChange(e, 'weightUnitId')}
                        >
                            {weightUnitListOptions}                         
                        </select>
                    </div>
                    <div>
                        <p><label htmlFor='flete'>Frete</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Frete"
                            id='flete'
                            name='flete'
                            value={store.product.flete}
                            onChange={e => handleChange(e, 'flete')}
                        />
                    </div>

                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='originalPrice'>Precio original</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Original Price"
                            id='originalPrice'
                            name='originalPrice'
                            value={store.product.originalPrice}
                            onChange={e => handleChange(e, 'originalPrice')}
                        />
                    </div>
                    <div>
                        <p><label htmlFor='color'>Color</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Color"
                            id='color'
                            name='color'
                            value={store.product.color}
                            onChange={e => handleChange(e, 'color')}
                        />
                    </div>

                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label>{state.respondMessage}</label></p>
                    </div>
                </div>


                <div className='add-product-view-b-07'>
					<button className='button-green'>salvar</button>
                    <button className='button-blue'>foto de capa</button>
				</div>
            </div>
        </form>
        )}
        </>
    )
}

export default  AddProductView