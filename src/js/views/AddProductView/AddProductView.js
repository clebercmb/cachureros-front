import React, { useState, useEffect, useContext } from "react"
import './AddProductView.css'

import { Context } from "../../store/appContext";

const AddProductView = (props) => {

    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        departmentList:[],
        categoryList:[],
        sizeList:[],
        productStateList:[],
        weightUnitList:[],
        product: {
            id: null,
            name: "",
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
                "/images/Imagen Muestra.png",
                "/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 6.png",
                "/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 7.png",
                "/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 8.png",
                "/images/Zapatillas-deportivas-transpirables-a-la-moda-para-hombre-y-mujer 9.png"
            ],
            departmentId: 1,
            categoryId: 1,
            sizeId: 1,
            productStateId: 1,
            userStoreId: store.user.userStoreId
        }	
	});

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
		console.log("useEffect 1-Behavior before the component is added to the DOM")
        console.log("useEffect 1-props.match.params.id", props.match.params.id)
        actions.fetchDepartmentList()
        actions.fetchCategoryList()
        actions.fetchWeightUnitList()
        actions.fetchSizeList()
        actions.fetchProductStateList()
        actions.setInfoBar(true, 'Registro del producto')
    }, []);
    
    useEffect(() => {
		console.log("useEffect 2-Behavior before the component is added to the DOM - departmentList")
        console.log("useEffect 2-props.match.params.id", props.match.params.id)
        let departmentList = store.departmentList
        setState({...state, departmentList: departmentList});
    }, [store.departmentList]);

    useEffect(() => {
		console.log("useEffect 3-Behavior before the component is added to the DOM - categoryList")
        console.log("useEffect 3-props.match.params.id", props.match.params.id)
        let categoryList = store.categoryList
        setState({...state, categoryList: categoryList});
    }, [store.categoryList]);  // 

    useEffect(() => {
		console.log("useEffect 4-Behavior before the component is added to the DOM - sizeList")
        console.log("useEffect 4-props.match.params.id", props.match.params.id)
        let sizeList = store.sizeList
        setState({...state, sizeList: sizeList});
    }, [store.sizeList]);

    useEffect(() => {
		console.log("useEffect 5-Behavior before the component is added to the DOM - productStateList")
        console.log("useEffect 5-props.match.params.id", props.match.params.id)
        let productStateList = store.productStateList
        setState({...state, productStateList: productStateList});
    }, [store.productStateList]);

    useEffect(() => {
		console.log("useEffect 6-Behavior before the component is added to the DOM - categoryList")
        console.log("useEffect 6-props.match.params.id", props.match.params.id)
        let weightUnitList = store.weightUnitList
        setState({...state, weightUnitList: weightUnitList});
    }, [store.weightUnitList]);

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

        let url = process.env.REACT_APP_URL+'/product/'+state.product.userStoreId
        let methodCall = 'POST'
        if (state.product.id !== null) {
            url = url + '/' + state.product.id
            methodCall = 'PUT'
        }
        console.log("AddProductView.handleSubmit.url=", url)
        console.log("AddProductView.handleSubmit.methodCall=", methodCall)
        fetch(url, {
            method: methodCall,
            body: JSON.stringify(state.product),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => console.log('AddProductView.handleSubmit.data=',data));   
    } 

    return (
        <form className='form-group add-product-view-container'>
            <div className='add-product-view-a'>
                <div className='add-product-view-a-01'>

                </div>            
                <div className='add-product-view-a-02'>
                    <div className='add-product-view-a-02-01'>

                    </div>
                    <div className='add-product-view-a-02-01'>

                    </div>

                </div>  
                <div className='add-product-view-a-02'>

                    <div className='add-product-view-a-02-01'>

                    </div>
                    <div className='add-product-view-a-02-01'>

                    </div>
                </div>
            </div>
            <div className='add-product-view-b'>
                <p className='add-product-view-b-01'>¡Vender es bueno y a todos les gusta!</p>
                <p className='add-product-view-b-02'>Luce genial en tus fotos y descripción del producto</p>

                <label for='name' className='add-product-view-b-03'>Nome</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    id='name'
                    name='name'
                    value={state.product.name}
                    defaultValue=''
                    onChange={e => handleChange(e, 'name')}
                    required
                />

                <label className='add-product-view-b-03'>Descripción</label>
				<textarea id='description' name='description'  className="form-control" placeholder="Descripción"/>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='brand'>Marca</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Marca"
                            id='brand'
                            name='brand'
                            value={state.product.brand}
                            defaultValue=''
                            onChange={e => handleChange(e, 'brand')}
                        />
                    </div>
                    <div>
                        <p><label for='model'>Modelo</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Model"
                            id='model'
                            name='model'
                            defaultValue=''
                            value={state.product.model}
                            onChange={e => handleChange(e, 'model')}
                        />
                    </div>

                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='price'>Precio</label></p>
                        <input
                            type="input"
                            className="add-product-view-b-04-01"
                            placeholder="Price"
                            id='price'
                            name='price'
                            defaultValue=''
                            value={state.product.price}
                            onChange={e => handleChange(e, 'price')}
                        />
                    </div>
                </div>
                
                <div className='add-product-view-b-05'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='hasBrand' className="container-checkbox">Sin Marca
                            <input  value={state.product.hasBrand} defaultValue={state.product.hasBrand} id='hasBrand' name='hasBrand' type="checkbox" onChange={e => handleChange(e, 'hasBrand')}/>
                            <span className="check"></span>
                        </label>
                    </div>
                </div>

                <div className='add-product-view-b-06'>
                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='department'>Departamento</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Departamento"
                            id='department'
                            name='department'
                            defaultValue='1'
                            value={state.product.departmentId}
                            onChange={e => handleChange(e, 'departmentId')}
                        >
                            {departmentListOptions}
                        </select>
                    </div>
                    <div>
                        <p><label for='category'>Categoria</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Categoria"
                            id='category'
                            name='category'
                            value={state.product.categoryId}
                            defaultValue='1'
                            onChange={e => handleChange(e, 'categoryId')}
                        >
                            {categoryListOptions}
                        </select>
                    </div>
                </div>   

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='size'>Tamaño</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Tamaño"
                            id='size'
                            name='size'
                            value={state.product.sizeId}
                            defaultValue='1'
                            onChange={e => handleChange(e, 'sizeId')}
                        >
                            {sizeListOptions}
                        </select>
                    </div>
                    <div>
                        <p><label for='productState'>Estado del producto</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Estado del producto"
                            id='productState'
                            name='productState'
                            value={state.product.productStateId}
                            defaultValue='1'
                            onChange={e => handleChange(e, 'productStateId')}
                        >
                            {productStateListOptions}                         
                        </select>
                    </div>

                </div> 

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='amount'>Cantidad</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Cantidad"
                            id='amount'
                            name='amount'
                            value={state.product.qty}
                            defaultValue=''
                            onChange={e => handleChange(e, 'qty')}
                        />
                    </div>
                    <div>
                        <p><label for='weight'>Peso del producto</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Peso del producto"
                            id='weight'
                            name='weight'
                            value={state.product.weight}
                            defaultValue=''
                            onChange={e => handleChange(e, 'weight')}
                        />
                    </div>
                </div> 

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='weightUnit'>Unid Peso producto</label></p>
                        <select
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Product weight unit"
                            id='weightUnit'
                            name='weightUnit'
                            value={state.product.weightId}
                            defaultValue=''
                            onChange={e => handleChange(e, 'weightUnitId')}
                        >
                            {weightUnitListOptions}                         
                        </select>
                    </div>
                    <div>
                        <p><label for='flete'>Frete</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Frete"
                            id='flete'
                            name='flete'
                            value={state.product.flete}
                            defaultValue=''
                            onChange={e => handleChange(e, 'flete')}
                        />
                    </div>

                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p><label for='originalPrice'>Precio original</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Original Price"
                            id='originalPrice'
                            name='originalPrice'
                            value={state.product.originalPrice}
                            defaultValue=''
                            onChange={e => handleChange(e, 'originalPrice')}
                        />
                    </div>
                    <div>
                        <p><label for='color'>Color</label></p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Color"
                            id='color'
                            name='color'
                            value={state.product.color}
                            defaultValue=''
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