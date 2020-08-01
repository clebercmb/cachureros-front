import React, { useState, useEffect, useContext } from "react"
import "./UserStoreView.css"
import { Context } from '../../store/appContext';
import Filter from '../../component/filter/Filter'  

import ProductSmallMediumPhoto from '../../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto'    

const UserStoreView = (props) => {

	const { store, actions } = useContext(Context);


    const [state, setState] = useState({
		userName: "clebermb",
        userStore: {},
        regionList:[],
        showAllFilter: true
	});


	useEffect(() => {
        console.log("UserStoreView useEffect 1: Behavior before the component is added to the DOM");
        console.log("UserStoreView.useEffect 1.props.user_store", props.match.params.user_store);
        actions.fetchUserStore(props.match.params.store_id);
        actions.fetchRegionList();
		console.log("UserStoreView.useEffect 1.store.userStore", store.userStore);
	}, []);

    useEffect(() => {
		console.log("UserStoreView useEffect 2: Behavior before the component is added to the DOM");
		console.log("UserStoreView.useEffect 2.store.regionList", store.regionList);
        //setState({...state, regionList: store.regionList});        
        let regionList = store.regionList
        setState({...state, regionList: regionList});

    }, [store.regionList]);

	useEffect(() => {
		console.log("UserStoreView useEffect 3: Behavior before the component is added to the DOM");
		console.log("UserStoreView.useEffect 3.store.userStore", store.contacts);
        setState({...state, userStore: store.userStore});
        actions.setInfoBar(true, 'Tendita', store.userStore.userName)
		console.log("UserStoreView.useEffect 2.state.userStore", state.userStore);
        

    }, [store.userStore]);


    

    console.log('UserStoreView.state.userStore=', state.userStore)

    let products = store.userStore.products
    console.log("UserStoreView.products(1)=", products)


    if (products)
        products = products.map((p, i) => {
            return (
                <ProductSmallMediumPhoto src={p.photo} key={i} id={p.id} alt={p.name} price={`${p.price}CLP`} name={p.name}/>
            )
        })
        
            
    console.log("UserStoreView.products(2)=", products)


    return (
        <div>
            <div className='user-store-view'>
                <div className='user-store-view-01'>
                    <div className='user-store-view-01-a'>
                        <img className='user-store-view-01-a-01'  src={state.userStore.userPhoto}/>
                        <div className='user-store-view-01-a-02'>
                            <label className='user-store-view-01-a-02-1'>{state.userStore.userFirstName}</label>
                            <label>{state.userStore.cityStore}, {state.userStore.district}</label>
                        </div>
                        <div className='user-store-view-01-a-03'>
                            <label>En Chachurero desde {state.userStore.registerDate}</label>
                        </div>
                        </div> 
                    <div className='user-store-view-01-b'>
                        <img src={state.userStore.storePhoto}></img>
                    </div>
                </div>
                <div className='user-store-view-02'>
                    <div className='user-store-view-02-a'>
                        <label>62 a venta</label>
                        <label>422 venditos</label>
                        <label>10 cachurada</label>
                        <label>5 mil segidores</label>
                        <label>2 mil seguindo</label>
                    </div>
                    <div className='user-store-view-02-b'>
                        <label>Busqueda en esta tendita</label>
                        <img src='/images/search.png'></img>
                    </div>
                </div>
                <div className='user-store-view-03'>

                </div>
                <div className='user-store-view-04'>
                    <Filter/>
                </div>
                <div className='user-store-view-05'>
                    {products}
                </div>
            </div>
        </div>
    )
}

export default UserStoreView