import React, { useState, useEffect, useContext } from "react"
import "./UserStoreView.css"
import { Context } from '../../store/appContext';
import Filter from '../../component/filter/Filter'  

import ProductSmallMediumPhoto from '../../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto'    

const UserStoreView = (props) => {

	const { store, actions } = useContext(Context);


    const [state, setState] = useState({
		userName: '',
        userStore: undefined ,
        regionList:[],
        showAllFilter: true
	});


	useEffect(() => {
        console.log("UserStoreView useEffect 1: Behavior before the component is added to the DOM");
        console.log("UserStoreView.useEffect 1.props.match.params.url", props.match.params.url);
        console.log("UserStoreView.useEffect 1.props.match.params.id", props.match.params.id);
        actions.fetchUserStore(props.match.params.url, props.match.params.id);
        //actions.fetchRegionList();
        console.log("UserStoreView.useEffect 1.store.userStore", store.userStore);
        
	}, [props.match.params.id]);

    /*
    useEffect(() => {
		console.log("UserStoreView useEffect 2: Behavior before the component is added to the DOM");
		console.log("UserStoreView.useEffect 2.store.regionList", store.regionList);
        //setState({...state, regionList: store.regionList});        
        let regionList = store.regionList
        setState({...state, regionList: regionList});

    }, [store.regionList]);
*/
	useEffect(() => {
		console.log("UserStoreView useEffect 3: Behavior before the component is added to the DOM");
		console.log("UserStoreView.useEffect 3: store.userStore", store.userStore);
        setState({...state, userStore: store.userStore});
        console.log("UserStoreView.useEffect 3: state", state);
        console.log("UserStoreView.useEffect 3: state.userStore", state.userStore);

        console.log("UserStoreView.useEffect 3: store.userStore is ?=", store.userStore === undefined)
        console.log("UserStoreView.useEffect 3: state.userStore is ?=", state.userStore === undefined)
        if (store.userStore) {
            actions.setInfoBar(true, `Tendita ${store.userStore.name}`)
        }
        
    }, [store.userStore]);

    
/* 	useEffect(() => {
		console.log("UserStoreView useEffect 4: Behavior before the component is added to the DOM");
		console.log("UserStoreView.useEffect 4: state.userStore", state.userStore);
		console.log("UserStoreView.useEffect 4: state.userStore[user]", state.userStore['user']);
        
        let name = ''
        if(state.userStore['user'] != undefined)
            name = state.userStore['user'].name

        let storeName = ''
        if(state.userStore['name'] != undefined)
            storeName = state.userStore.name
    
        
        console.log("UserStoreView.useEffect 4: storeName", storeName);
    


    }, [state.userStore]);
 */

    console.log('UserStoreView.state.userStore=', state.userStore)

    if(state.userStore) {
//        actions.setInfoBar(true, state.userStore.user.name)
//        actions.setInfoStore('Tendita', 'q')
    }

    //let products = store.userStore.products
    let products = []
    if (state.userStore && state.userStore.products)
        products = state.userStore.products
    console.log("UserStoreView.products(1)=", products)

    if (products)
        products = products.map((p, i) => {
            console.log("UserStoreView.p=", p)
            console.log("UserStoreView.p.photos=", p.photos)
            console.log("UserStoreView.p.userStore=", p.userStore)
            if(p.userStore) {

                console.log("UserStoreView.p.userStore.id=", p.userStore.id)
                console.log("UserStoreView.store.login.data=", store.login.data)
                let edit = false
                if(store.login.data)
                    edit = store.login.data.user.id === p.userStore.id
                console.log('UserStoreView.edit=', edit)
                let url = process.env.REACT_APP_URL+'/images-products/'
                return (
                    <ProductSmallMediumPhoto src={url+p.photos[0]} key={i} id={p.id} alt={p.name} price={`${p.price}CLP`} name={p.name} edit={edit}/>
                )
            }
        })

    console.log("UserStoreView.products(2)=", products)

    return (
        <div>
            <div className='user-store-view'>
                <div className='user-store-view-01'>
                    <div className='user-store-view-01-a'>
                        <img className='user-store-view-01-a-01'  src={state.userStore && state.userStore.user.photoUrl}/>
                        <div className='user-store-view-01-a-02'>
                            <label className='user-store-view-01-a-02-1'>{state.userStore && state.userStore.url}</label>
                            <label>{state.userStore && state.userStore.district}</label>
                        </div>
                        <div className='user-store-view-01-a-03'>
                            <label>En Chachurero desde {state.userStore && state.userStore.createdAt}</label>
                        </div>
                        </div> 
                    <div className='user-store-view-01-b'>
                        <img src={state.userStore && state.userStore.photoUrl}></img>
                    </div>
                </div>
                <div className='user-store-view-02'>
                    <div className='user-store-view-02-a'>
                        <label>{state.userStore && state.userStore.sells} a venta</label>
                        <label>{state.userStore && state.userStore.solds} venditos</label>
                        <label>{state.userStore && state.userStore.likes} cachurada</label>
                        <label>{state.userStore && state.userStore.followers} seguidores</label>
                        <label>{state.userStore && state.userStore.followeds} seguindo</label>
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