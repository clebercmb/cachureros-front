import React, { useState, useEffect, useContext } from "react"
import "./UserStoreView.css"
import { Context } from '../../store/appContext';
import Filter from '../../component/filter/Filter'  

import ProductSmallMediumPhoto from '../../component/ProductSmallMediumPhoto/ProductSmallMediumPhoto'    

const UserStoreView = (props) => {

	const { store, actions } = useContext(Context);


    const [state, setState] = useState({
		userName: '',
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
        
	}, [props.match.params.id, store.product]);

	useEffect(() => {
		console.log("UserStoreView useEffect 3: Behavior before the component is added to the DOM");
		console.log("UserStoreView.useEffect 3: store.userStore", store.userStore);
        //setState({...state, userStore: store.userStore});
        console.log("UserStoreView.useEffect 3: state", state);
        console.log("UserStoreView.useEffect 3: state.userStore", state.userStore);

        console.log("UserStoreView.useEffect 3: store.userStore is ?=", store.userStore === undefined)
        console.log("UserStoreView.useEffect 3: state.userStore is ?=", state.userStore === undefined)
        if (store.userStore) {
            actions.setInfoBar(true, `Tendita ${store.userStore.name}`)
        }
        
    }, [store.userStore]);

    console.log('UserStoreView.store.userStore=', store.userStore)

    console.log(">>>>UserStoreView.process.env=", process.env)
    console.log(">>>>UserStoreView.process.env.REACT_APP_BACK_IMAGES=", process.env.REACT_APP_BACK_IMAGES)
    
    const urlImages = process.env.REACT_APP_BACK_IMAGES
    console.log("%%%%%%%%% >>>>UserStoreView.urlImages=", urlImages)

    //let products = store.userStore.products
    let products = []
    if (store.userStore && store.userStore.products)
        products = store.userStore.products
    console.log("UserStoreView.products(1)=", products)

    if (products) {
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
                let url = process.env.REACT_APP_URL+'/images/'
                return (
                    <ProductSmallMediumPhoto src={urlImages+p.photos[0]} key={i} id={p.id} alt={p.name} price={`${p.price}CLP`} name={p.name} edit={edit}/>
                )
            }
        })
    }
    console.log("UserStoreView.products(2)=", products)
    
    return (
        <div>

            <div className='user-store-view'>
                <div className='user-store-view-01'>
                    <div className='user-store-view-01-a'>
                        <img className='user-store-view-01-a-01'  src={store.userStore && urlImages+store.userStore.user.photoUrl}/>
                        <div className='user-store-view-01-a-02'>
                            <label className='user-store-view-01-a-02-1'>{store.userStore && store.userStore.url}</label>
                            <label>{store.userStore && store.userStore.district}</label>
                        </div>
                        <div className='user-store-view-01-a-03'>
                            <label>En Chachurero desde {store.userStore && store.userStore.createdAt}</label>
                        </div>
                        </div> 
                    <div className='user-store-view-01-b'>
                        <img src={store.userStore && urlImages+store.userStore.photoUrl}></img>
                    </div>
                </div>
                <div className='user-store-view-02'>
                    <div className='user-store-view-02-a'>
                        <label>{store.userStore && store.userStore.sells} a venta</label>
                        <label>{store.userStore && store.userStore.solds} venditos</label>
                        <label>{store.userStore && store.userStore.likes} cachurada</label>
                        <label>{store.userStore && store.userStore.followers} seguidores</label>
                        <label>{store.userStore && store.userStore.followeds} seguindo</label>
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