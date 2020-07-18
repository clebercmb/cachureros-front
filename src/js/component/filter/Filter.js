import React, { useState, useEffect, useContext } from "react"
import "./Filter.css"

const Filter = (props) => {

    const [state, setState] = useState({
        filterPosition: '',
        isOpen: 'hidden-filter',
        isOpen1: 'hidden-filter',
        isOpen2: 'hidden-filter',
        isOpen3: 'hidden-filter',
        isOpen4: 'hidden-filter',
        isOpen5: 'hidden-filter',
        isOpen6: 'hidden-filter',

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

            <div className={`product-feed-filters-content position-01 ${state.filterPosition === 'position-01' ? 'show-filter' : 'hidden-filter'}`}  >
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

            <div className={`product-feed-filters-content position-02 ${state.filterPosition === 'position-02' ? 'show-filter' : 'hidden-filter'}`}  >
                <div className='product-feed-filters-content-body'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-category1' className="container-checkbox">Categoria 1
                            <input  id='container-checkbox-category1' name='container-checkbox-category1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-category2' className="container-checkbox">Categoria 2
                            <input  id='container-checkbox-category2' name='container-checkbox-category2' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-category3' className="container-checkbox">Categoria 3
                            <input  id='container-checkbox-category3' name='container-checkbox-category3' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-category4' className="container-checkbox">Categoria 4
                            <input  id='container-checkbox-category4' name='container-checkbox-category4' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-category5' className="container-checkbox">Categoria 5
                            <input  id='container-checkbox-category5' name='container-checkbox-category5' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                </div> 
                <div className='product-feed-filters-content-buttons'>
                    <button className='button-clear'>Limpar</button>
                    <button className='button-apply'>Aplicar</button>
                </div>
            </div>

            <div className={`product-feed-filters-content position-03 ${state.filterPosition === 'position-03' ? 'show-filter' : 'hidden-filter'}`}  >
                <div className='product-feed-filters-content-body'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-size1' className="container-checkbox">Tamaño 1
                            <input  id='container-checkbox-size1' name='container-checkbox-size1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-size2' className="container-checkbox">Tamaño 2
                            <input  id='container-checkbox-size2' name='container-checkbox-size2' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-size3' className="container-checkbox">Tamaño 3
                            <input  id='container-checkbox-size3' name='container-checkbox-size3' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-size4' className="container-checkbox">Tamaño 4
                            <input  id='container-checkbox-size4' name='container-checkbox-size4' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-size5' className="container-checkbox">Tamaño 5
                            <input  id='container-checkbox-size5' name='container-checkbox-size5' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>
                </div> 
                <div className='product-feed-filters-content-buttons'>
                    <button className='button-clear'>Limpar</button>
                    <button className='button-apply'>Aplicar</button>
                </div>
            </div>

            <div className={`product-feed-filters-content position-04 ${state.filterPosition === 'position-04' ? 'show-filter' : 'hidden-filter'}`}  >
                <div className='product-feed-filters-content-body'>
                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-price1' className="container-checkbox">Precio 1
                            <input  id='container-checkbox-price1' name='container-checkbox-price1' type="checkbox" />
                            <span className="check"></span>
                        </label>
                    </div>

                    <div className='product-feed-filters-content-body-wrapper'>
                        <label name='container-checkbox-price2' className="container-checkbox">Precio 2
                            <input  id='container-checkbox-price2' name='container-checkbox-price2' type="checkbox" />
                            <span className="check"></span>
                        </label>
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
    )
}

export default Filter