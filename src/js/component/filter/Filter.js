import React, { useState, useEffect, useContext } from "react"
import "./Filter.css"
import { Context } from '../../store/appContext';

const Filter = (props) => {
    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        filterPosition: '',
        regionList:[],
        categoryList:[],
        sizeList:[],
        productStateList:[],
        isOpen: 'hidden-filter',
        isOpen1: 'hidden-filter',
        isOpen2: 'hidden-filter',
        isOpen3: 'hidden-filter',
        isOpen4: 'hidden-filter',
        isOpen5: 'hidden-filter',
        isOpen6: 'hidden-filter',

    });

    useEffect(() => {
        console.log("Filter.useEffect-1: Behavior before the component is added to the DOM")
        console.log("Filter.useEffect-1: props", props)
        actions.fetchRegionList()
        actions.fetchCategoryList()
        actions.fetchSizeList()
        actions.fetchProductStateList()

	}, []);

    useEffect(() => {
		console.log("Filter.useEffect-2: Behavior before the component is added to the DOM");
		console.log("Filter.useEffect-2: store.regionList", store.regionList);
        //setState({...state, regionList: store.regionList});        
        let regionList = store.regionList
        setState({...state, regionList: regionList});

    }, [store.regionList]);

    useEffect(() => {
		console.log("Filter.useEffect-3: Behavior before the component is added to the DOM - categoryList")
        console.log("Filter.useEffect-3: store.categoryList", store.categoryList)
        let categoryList = store.categoryList
        setState({...state, categoryList: categoryList});
    }, [store.categoryList]); 

    useEffect(() => {
		console.log("Filter.useEffect-4: Behavior before the component is added to the DOM - sizeList")
        console.log("Filter.useEffect-4: store.sizeList", store.sizeList)
        let sizeList = store.sizeList
        setState({...state, sizeList: sizeList});
    }, [store.sizeList]);

    useEffect(() => {
		console.log("Filter.useEffect 5-Behavior before the component is added to the DOM - productStateList")
        console.log("Filter.useEffect 5-store.productStateList", store.productStateList)
        let productStateList = store.productStateList
        setState({...state, productStateList: productStateList});
    }, [store.productStateList]);
    
    let changeFilterPosition = (filterPosition) => {
        console.log('***changeFilterPosition***')
        console.log('filterPosition === state.filterPosition=>', filterPosition === state.filterPosition)

        if( filterPosition !== state.filterPosition ) 
            setState({...state, isOpen: 'show-filter', filterPosition: filterPosition})
        else    
            setState({...state, isOpen: 'hidden-filter',  filterPosition: ''})
        
        console.log('Filter.changeFilterPositionstate.state.filterPosition=', state.filterPosition)
        console.log('Filter.changeFilterPositionstate.state.isOpen=', state.isOpen)
    }


    const regionListOptions = state.regionList.map((region, i) => {
        return (
            <div key={i} className='product-feed-filters-content-body-wrapper'>
                <label name={'container-checkbox-region'+i} className="container-checkbox">{region.name}
                    <input  value={region.id} id={'container-checkbox-region'+i} name={'container-checkbox-region'+i} type="checkbox" />
                    <span className="check"></span>
                </label>
            </div>

        )    
    })   
    
    const categoryListOptions = state.categoryList.map((category, i) => {
        return(
            <div key={i} className='product-feed-filters-content-body-wrapper'>
                <label name={'container-checkbox-category'+i} className="container-checkbox">{category.name}
                    <input  value={category.id} id={'container-checkbox-category'+i} name={'container-checkbox-category'+i} type="checkbox" />
                    <span className="check"></span>
                </label>
            </div>
        )
    })

    const sizeListOptions = state.sizeList.map((size, i) => {
        return(
            <div key={i} className='product-feed-filters-content-body-wrapper'>
                <label name={'container-checkbox-size'+i} className="container-checkbox">{size.name}
                    <input  id={'container-checkbox-size'+i} name={'container-checkbox-size'+i} type="checkbox" />
                    <span className="check"></span>
                </label>
            </div>
        )
    })

    return (
        <div className='filter'>
            <label>Filtros de busquedas</label>
            <div className='filter-01'>   
                <button className='button-filter' onClick={()=>changeFilterPosition('position-01')}>
                    <label>Región</label>
                    <img src={state.filterPosition === 'position-01' ? '/images/arrow-up.png' : '/images/arrow-down.png'}/>
                </button>

                <button className='button-filter' onClick={e=>changeFilterPosition('position-02')}>
                    <label>Categorias</label>
                    <img src={state.filterPosition === 'position-02' ? '/images/arrow-up.png' : '/images/arrow-down.png'}/>
                </button>

                <button className='button-filter' onClick={e=>changeFilterPosition('position-03')}>
                    <label>Tamaño</label>
                    <img src={state.filterPosition === 'position-03' ? '/images/arrow-up.png' : '/images/arrow-down.png'}/>
                </button>
                
                <button className='button-filter' onClick={e=>changeFilterPosition('position-04')}>
                    <label>Precio</label>
                    <img src={state.filterPosition === 'position-04' ? '/images/arrow-up.png' : '/images/arrow-down.png'}/>
                </button>

                <button className='button-filter' onClick={e=>changeFilterPosition('position-05')}>
                    <label>Novedades</label>
                    <img src={state.filterPosition === 'position-05' ? '/images/arrow-up.png' : '/images/arrow-down.png'}/>
                </button>
                
                <button className='button-filter' onClick={e=>changeFilterPosition('position-06')}>
                    <label>Condiciones</label>
                    <img src={state.filterPosition === 'position-06' ? '/images/arrow-up.png' : '/images/arrow-down.png'}/>
                </button>

                <button className='clean-filter'>
                    Limpar Filtros
                </button>
            </div>

            <div className='filter-02'>
                <div className={`product-feed-filters-content position-01 ${state.filterPosition === 'position-01' ? 'show-filter' : 'hidden-filter'}`}  >
                    <div className='product-feed-filters-content-body'>
                        {regionListOptions}
                    </div> 
                    <div className='product-feed-filters-content-buttons'>
                        <button className='button-clear'>Limpar</button>
                        <button className='button-apply'>Aplicar</button>
                    </div>
                </div>

                <div className={`product-feed-filters-content position-02 ${state.filterPosition === 'position-02' ? 'show-filter' : 'hidden-filter'}`}  >
                    <div className='product-feed-filters-content-body'>
                        {categoryListOptions}
                    </div> 
                    <div className='product-feed-filters-content-buttons'>
                        <button className='button-clear'>Limpar</button>
                        <button className='button-apply'>Aplicar</button>
                    </div>
                </div>

                <div className={`product-feed-filters-content position-03 ${state.filterPosition === 'position-03' ? 'show-filter' : 'hidden-filter'}`}  >
                    <div className='product-feed-filters-content-body'>
                        {sizeListOptions}
                    </div> 
                    <div className='product-feed-filters-content-buttons'>
                        <button className='button-clear'>Limpar</button>
                        <button className='button-apply'>Aplicar</button>
                    </div>
                </div>

                <div className={`product-feed-filters-content position-04 ${state.filterPosition === 'position-04' ? 'show-filter' : 'hidden-filter'}`}  >
                    <div className='product-feed-filters-content-body'>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label for='container-price1' name='container-price1' className="container-price">De</label>
                            <input  id='container-price1' name='container-price1'  />
                        </div>

                        <div className='product-feed-filters-content-body-wrapper'>
                            <label for='container-price2' name='container-price2' className="container-price">Hasta</label>
                            <input  id='container-price2' name='container-price2'  />
                        </div>
                    </div> 
                    <div className='product-feed-filters-content-buttons'>
                        <button className='button-clear'>Limpar</button>
                        <button className='button-apply'>Aplicar</button>
                    </div>
                </div>

                <div className={`product-feed-filters-content position-05 ${state.filterPosition === 'position-05' ? 'show-filter' : 'hidden-filter'}`}  >
                    <div className='product-feed-filters-content-body'>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label name='container-checkbox-news1' className="container-checkbox">Ultimas 24h
                                <input  id='container-checkbox-news1' name='container-checkbox-news1' type="checkbox" />
                                <span className="check"></span>
                            </label>
                        </div>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label name='container-checkbox-news2' className="container-checkbox">Ultimas 24h
                                <input  id='container-checkbox-news2' name='container-checkbox-news2' type="checkbox" />
                                <span className="check"></span>
                            </label>
                        </div>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label name='container-checkbox-news3' className="container-checkbox">Ultimas 24h
                                <input  id='container-checkbox-news3' name='container-checkbox-news3' type="checkbox" />
                                <span className="check"></span>
                            </label>
                        </div>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label name='container-checkbox-news4' className="container-checkbox">Ultimas 24h
                                <input  id='container-checkbox-news4' name='container-checkbox-news4' type="checkbox" />
                                <span className="check"></span>
                            </label>
                        </div>
                    </div> 
                    <div className='product-feed-filters-content-buttons'>
                        <button className='button-clear'>Limpar</button>
                        <button className='button-apply'>Aplicar</button>
                    </div>
                </div>
                <div className={`product-feed-filters-content position-06 ${state.filterPosition === 'position-06' ? 'show-filter' : 'hidden-filter'}`}  >
                    <div className='product-feed-filters-content-body'>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label name='container-checkbox-condition1' className="container-checkbox">Nunca usado
                                <input  id='container-checkbox-condition1' name='container-checkbox-condition1' type="checkbox" />
                                <span className="check"></span>
                            </label>
                        </div>
                        <div className='product-feed-filters-content-body-wrapper'>
                            <label name='container-checkbox-condition2' className="container-checkbox">Nunca usado
                                <input  id='container-checkbox-condition2' name='container-checkbox-condition2' type="checkbox" />
                                <span className="check"></span>
                            </label>
                        </div>
                    </div> 
                    <div className='product-feed-filters-content-buttons'>
                        <button className='button-clear'>Limpar</button>
                        <button className='button-apply'>Aplicar</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Filter