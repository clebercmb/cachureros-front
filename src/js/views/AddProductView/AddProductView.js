import React, { useState, useEffect, useContext } from "react"
import './AddProductView.css'

import { Context } from "../../store/appContext";

const AddProductView = (props) => {

    const { store, actions } = useContext(Context);


    useEffect(() => {
		console.log("Behavior before the component is added to the DOM");
		console.log("props.match.params.id", props.match.params.id);

        actions.setInfoBar(true, 'Registro del producto')
	}, []);


    return (
        <div className='add-product-view-container'>
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

                <label className='add-product-view-b-03'>Nome</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nome"
                    id='nome'
                    name='nome'
                    defaultValue=''
                    onChange={e => {}}
                />

                <label className='add-product-view-b-03'>Descripción</label>
				<textarea id='description' name='description'  className="form-control" placeholder="Descripción"/>

                <div className='add-product-view-b-04'>
                    <div>
                        <p>Marca</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Marca"
                            id='brand'
                            name='brand'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                    <div>
                        <p>Precio</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Precio"
                            id='price'
                            name='price'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                </div>
                
                <div className='add-product-view-b-05'>
                    <div className='add-product-view-b-05-01'>
                    </div>
                    <label>Producto sin marca</label>
                </div>

                <div className='add-product-view-b-06'>
                </div>

                <div className='add-product-view-b-04'>
                    <div>
                        <p>Departamento</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Departamento"
                            id='department'
                            name='department'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                    <div>
                        <p>Categoria</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Categoria"
                            id='categoria'
                            name='categoria'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                </div>   

                <div className='add-product-view-b-04'>
                    <div>
                        <p>Sub-categoria</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Sub-categoria"
                            id='subcategoria'
                            name='subcategoria'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                    <div>
                        <p>Tamaño</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Tamaño"
                            id='size'
                            name='size'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                </div> 

                <div className='add-product-view-b-04'>
                    <div>
                        <p>Estado del producto</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Estado del producto"
                            id='productState'
                            name='productState'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                    <div>
                        <p>Cantidad</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Cantidad"
                            id='amount'
                            name='amount'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                </div> 

                <div className='add-product-view-b-04'>
                    <div>
                        <p>Peso del producto</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Peso del producto"
                            id='weight'
                            name='weight'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                    <div>
                        <p>Frete</p>
                        <input
                            type="text"
                            className="add-product-view-b-04-01"
                            placeholder="Frete"
                            id='frete'
                            name='fret'
                            defaultValue=''
                            onChange={e => {}}
                        />
                    </div>
                </div>


                <div className='form-group add-product-view-b-07'>
					<button className='button-green'>salvar</button>
                    <button className='button-blue'>foto de capa</button>
				</div>



            </div>
        </div>
    )
}

export default  AddProductView