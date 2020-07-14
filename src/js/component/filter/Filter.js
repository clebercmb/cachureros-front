import React, { useState, useEffect, useContext } from "react"
import "./Filter.css"

const Filter = (props) => {

    const [state, setState] = useState({
        filterPosition: '',
        isOpen: 'hidden-filter'
    });
    
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

            <div className={`product-feed-filters-content ${state.filterPosition} ${state. isOpen}`}>
                <div className='product-feed-filters-content-body'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Arica and Parinacota
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Tarapacá
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Antofagasta
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Atacama
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Coquimbo
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Valparaíso
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Santiago
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">O'Higgins
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Ñuble
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Biobío
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Araucanía
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Los Ríos
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Los Lagos
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Aysén
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-region1' className="container-checkbox">Magallanes
                            <input  id='container-checkbox-region1' name='container-checkbox-region1' type="checkbox" />
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
    )
}

export default Filter