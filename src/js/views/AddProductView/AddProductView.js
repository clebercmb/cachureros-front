import React, { useState, useEffect, useContext } from "react"
import './AddProductView.css'

import { Context } from "../../store/appContext";
import { updateInferTypeNode } from "typescript";
import DraggableUploader from "../../component/DraggableUploader/DraggableUploader"

const AddProductView = (props) => {

    const { store, actions } = useContext(Context);

    let productInitialSetup= {
        id: '',
        name:'',
        price: 0,
        originalPrice: 0, 
        hasBrand: false,
        brand: "",
        color: "",
        model: "",
        weight: 0,
        flete:0,
        weightUnitId: 1,
        qty: 0,
        photos: [
            "",
            "",
            "",
            "",
            ""
        ],
        departmentId: 1,
        categoryId: 1,
        sizeId: 1,
        productStateId: 1,
        userStoreId: ''
    } 

    const [state, setState] = useState({
        type:'',
        sucess: null,
        departmentList:[],
        categoryList:[],
        sizeList:[],
        productStateList:[],
        weightUnitList:[],
        product: {
            id: '',
            name: '',
            price: 0,
            originalPrice: 0, 
            hasBrand: false,
            brand: "",
            color: "",
            model: "",
            weight: 0,
            flete:0,
            weightUnitId: 1,
            qty: 0,
            photos: [
                '',
                '',
                '',
                '',
                ''
            ],
            departmentId: 1,
            categoryId: 1,
            sizeId: 1,
            productStateId: 1,
            userStoreId: ''
        },
        photos:[
            '',
            '',
            '',
            '',
            ''
        ]
    });
    
    function handleFilePhotoProduct(file, index) {
        console.log('AddProductView.handleFile.file=', file)
        console.log('AddProductView.handleFile.index=', index)
        let photos = state.photos
        photos[index] = file
        setState({...state, photos: photos});
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
        let product = state.product
        product[field] = value
        if(e.target.type === 'checkbox')
            product[field] = e.target.checked
    

        setState({...state, product: product});

    }

    useEffect(() => {
		console.log("AddProductView.useEffect 1-Behavior before the component is added to the DOM")
        console.log("AddProductView.useEffect 1-props.match.params.id", props.match.params.id)
        actions.fetchDepartmentList()
        actions.fetchCategoryList()
        actions.fetchWeightUnitList()
        actions.fetchSizeList()
        actions.fetchProductStateList()

        let type = 'Nuevo'
        let product = state.product_inital_state
        
        if(props.match.params.id) {
            type = 'Modificar'
            actions.fetchProduct(props.match.params.id)
        }

        console.log('AddProductView.useEffect 1-type=', type)
        setState({...state, type: type});
        console.log('AddProductView.useEffect 1-state.type=', state.type)
        actions.setInfoBar(true, `Registro del producto - ${type}`)

        if (props.match.params.id ===  undefined) {
            setState({...state, product: productInitialSetup});
            let photos=[
                '',
                '',
                '',
                '',
                ''
            ]
            //setState({...state, photos: photos});
        } else {
            setState({...state, product: store.product});
        }
            
    }, [props.match.params.id]);
    
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

    useEffect(() => {
		console.log("AddProductView.useEffect 7-Behavior before the component is added to the DOM - departmentList")
        console.log("AddProductView.useEffect 7-props.match.params.id", props.match.params.id)
        console.log("AddProductView.useEffect 7-state.photos(1)", state.photos)
        let product = store.product
        setState({...state, product: product});
        //setState({...state, photos: store.product.photos});

        console.log('AddProductView.useEffect 7-store.product', store.product)
        console.log('AddProductView.useEffect 7-product', product)
        console.log('AddProductView.useEffect 7-state.product', state.product)
        console.log("AddProductView.useEffect 7-state.photos(2)", state.photos)
    }, [store.product]);

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

        console.log("****>AddProductView.state.product=", state.product)
        let formData = new FormData();
        formData.append("name", state.product.name);
        formData.append("price", state.product.price);
        formData.append("originalPrice", state.product.originalPrice);
        formData.append("hasBrand", state.product.hasBrand);
        formData.append("brand", state.product.brand);
        formData.append("color", state.product.color);
        formData.append("model", state.product.model);
        formData.append("weight", state.product.weight);
        formData.append("flete", state.product.flete);
        formData.append("weightUnitId", state.product.weightUnitId);
        formData.append("qty", state.product.qty);
        formData.append("photo0", state.photos[0]);
        formData.append("photo1", state.photos[1]);
        formData.append("photo2", state.photos[2]);
        formData.append("photo3", state.photos[3]);
        formData.append("photo4", state.photos[4]);
        formData.append("departmentId", state.product.departmentId);
        formData.append("categoryId", state.product.categoryId);
        formData.append("sizeId", state.product.sizeId);
        formData.append("productStateId", state.product.productStateId);

        console.log('AddProductView.handleSubmit.store.login.data.user.userStore', store.login.data.user.userStore)
        formData.append("userStoreId", store.login.data.user.userStore.id);

        let url = process.env.REACT_APP_URL+'/product/'+state.product.userStoreId
        let methodCall = 'POST'
        console.log("AddProductView.handleSubmit.state.product.id=", state.product.id, state.product.id !== null, state.product.id!=='')
        if ( state.product.id !== null &&  state.product.id!=='' ) {
            url = url + '/' + state.product.id
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
        .then(data => console.log('AddProductView.handleSubmit.data=',data));
        setState({...state, product: productInitialSetup});
    } 

    console.log("AddProductView.state.product(2)=", state.product)

    return (
        <form className='form-group add-product-view-container'>
            <div className='add-product-view-a'>
                <div className='add-product-view-a-01'>
                    <DraggableUploader src={state.product.photos[0]} handleFile= {handleFilePhotoProduct} index={0} type='L'/>
                </div>            
                <div className='add-product-view-a-02'>
                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.product.photos[1]} handleFile= {handleFilePhotoProduct} index={1} type='S'/>
                    </div>
                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.product.photos[2]} handleFile= {handleFilePhotoProduct} index={2} type='S'/>
                    </div>

                </div>  
                <div className='add-product-view-a-02'>

                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.product.photos[3]} handleFile= {handleFilePhotoProduct} index={3} type='S'/>
                    </div>
                    <div className='add-product-view-a-02-01'>
                        <DraggableUploader src={state.product.photos[4]} handleFile= {handleFilePhotoProduct} index={4} type=''/>
                    </div>
                </div>
            </div>
            <div className='add-product-view-b'>
                <p className='add-product-view-b-01'>¡Vender es bueno y a todos les gusta!</p>
                <p className='add-product-view-b-02'>Luce genial en tus fotos y descripción del producto</p>

                <label htmlFor='name' className='add-product-view-b-03'>Nome</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    id='name'
                    name='name'
                    value={state.product.name}
                    onChange={e => handleChange(e, 'name')}
                    required
                />

                <label className='add-product-view-b-03'>Descripción</label>
				<textarea id='description' name='description'  className="form-control" placeholder="Descripción"/>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label htmlFor='brand'>Marca</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Marca"
                            id='brand'
                            name='brand'
                            value={state.product.brand}
                            onChange={e => handleChange(e, 'brand')}
                        />
                    </div>
                    <div>
                        <p><label htmlFor='model'>Modelo</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Model"
                            id='model'
                            name='model'
                            value={state.product.model}
                            onChange={e => handleChange(e, 'model')}
                        />
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
                            value={state.product.price}
                            onChange={e => handleChange(e, 'price')}
                        />
                    </div>
                </div>
                
                <div className='add-product-view-b-05'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='hasBrand' className="container-checkbox">Sin Marca
                            <input  value={state.product.hasBrand} id='hasBrand' name='hasBrand' type="checkbox" onChange={e => handleChange(e, 'hasBrand')}/>
                            <span className="check"></span>
                        </label>
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
                            value={state.product.departmentId}
                            onChange={e => handleChange(e, 'departmentId')}
                        >
                            {departmentListOptions}
                        </select>
                    </div>
                    <div>
                        <p><label htmlFor='category'>Categoria</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Categoria"
                            id='category'
                            name='category'
                            value={state.product.categoryId}
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
                            value={state.product.sizeId}
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
                            value={state.product.productStateId}
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
                            value={state.product.qty}
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
                            value={state.product.weight}
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
                            value={state.product.weightId}
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
                            value={state.product.flete}
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
                            value={state.product.originalPrice}
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
                            value={state.product.color}
                            onChange={e => handleChange(e, 'color')}
                        />
                    </div>

                </div>

                <div className='add-product-view-b-07'>
					<button className='button-green' onClick={e => handleSubmit(e)}>salvar</button>
                    <button className='button-blue'>foto de capa</button>
				</div>
            </div>
        </form>
    )
}

export default  AddProductView