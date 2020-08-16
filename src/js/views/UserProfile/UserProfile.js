import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
//import history from "../component/history";
import PropTypes from "prop-types";
import './UserProfile.css'
import '../../../styles/general.css'

const UserProfile = props => {
	//const [id, setId] = useState("");
	const { store, actions } = useContext(Context);
	console.log("props.history", props.history);

	const [state, setState] = useState({
		userProfile: {
			fullName: "",
			email: "",
			phone: "",
			address: "",
			mode: "Add2",
			userPhoto:'',
			userPhotoImage:'',
			userStorePhoto:'',		
			userStorePhotoImage:'',
			userStore: null,
			userPhotoUrl:null,
			userStorePhotoUrl:null,

		},
		responseMessage: {
			msg:''
		},
		fileInputUserPhoto:'',
		fileInputUserStorePhoto:''

	});


	useEffect(() => {
		console.log("UserProfile.userEffect (1):Behavior before the component is added to the DOM");
		console.log("UserProfile.userEffect (1):props.match.params.id", props.match.params.id);
		console.log("UserProfile.userEffect (1):state", state);
		console.log("UserProfile.userEffect (1):store.useStore", store.useStore);

		actions.fetchUserStore(null, props.match.params.id)
		actions.fetchRegionList()

		actions.setInfoBar(true, 'Configuración', '')

		//props.history.push("/");
	}, []);

	useEffect(() => {
		console.log("UserProfile.userEffect (2):Behavior before the component is added to the DOM");
		console.log("UserProfile.userEffect (2):props.match.params.id", props.match.params.id);
		console.log("UserProfile.userEffect (2):store.userStore", store.userStore);
        const urlImages = process.env.REACT_APP_BACK_IMAGES

		let newState = state.userProfile

        if(store.userStore && store.userStore.id !== '' && store.userStore.user.photoUrl !== ''){ 
			newState.userPhotoImage = urlImages+store.userStore.user.photoUrl
		}

		if(store.userStore && store.userStore.id !== '' && store.userStore.photoUrl !== ''){ 
			newState.userStorePhotoImage = urlImages+store.userStore.photoUrl
		}

		console.log("UserProfile.userEffect (2):store.userStore (before): ", state);
		setState({...state, userProfile:newState})    
		console.log("UserProfile.userEffect (2):store.userStore (after):", state);

		//props.history.push("/");
	}, [store.userStore]);

	useEffect(() => {
		console.log("UserProfile.userEffect (3):Behavior before the component is added to the DOM");
		console.log("UserProfile.userEffect (3):store.state", state);

		//props.history.push("/");
	}, [state]);



	console.log(">>UserProfile.store.useStore", store.useStore);
	let url = process.env.REACT_APP_URL + '/images-products/'

	console.log(">>UserProfile.store.regionList=", store.regionList);
    const regionListOptions = store.regionList.map((region, i) => {
        return (
			<option key={region.id} id={region.id} value={region.id}>{region.name}</option>
        )    
    })  
	console.log(">>UserProfile.regionListOptions=", regionListOptions);

	function handleName(e) {
        console.log("***UserProfile.handleName")
        console.log('UserProfile.handleName.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleName.value=',value)

        let userStore = store.userStore
        userStore.name = value
		actions.setUserStore(userStore); 
    }

	function handleBio(e) {
        console.log("***UserProfile.handleBio")
        console.log('UserProfile.handleBio.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleBio.value=',value)

        let userStore = store.userStore
        userStore.bio = value
		actions.setUserStore(userStore); 
	}
	
	function handleUrl(e) {
        console.log("***UserProfile.handleUrl")
        console.log('UserProfile.handleUrl.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleUrl.value=',value)

        let userStore = store.userStore
        userStore.url = value
		actions.setUserStore(userStore); 
    }

	function handleRegion(e) {
        console.log("***UserProfile.handleRegion")
        console.log('UserProfile.handleRegion.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleRegion.value=',value)

		let region = {
			id: parseInt(value)
		}

        let userStore = store.userStore
        userStore.region= region
		actions.setUserStore(userStore); 
	}
	
	function handleUserName(e) {
        console.log("***UserProfile.handleUserName")
        console.log('UserProfile.handleUserName.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleUserName.value=',value)
        let userStore = store.userStore
        userStore.user.name = value
		actions.setUserStore(userStore); 
	}
	
	function handleEmail(e) {
        console.log("***UserProfile.handleLogin")
        console.log('UserProfile.handleLogin.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleLogin.value=',value)
        let userStore = store.userStore
        userStore.user.login.email = value
		actions.setUserStore(userStore); 
	}
	
	function handlePassword(e) {
        console.log("***UserProfile.handlePassword")
        console.log('UserProfile.handlePassword.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handlePassword.value=',value)
        let userStore = store.userStore
        userStore.user.login.password = value
		actions.setUserStore(userStore); 
	}

	function handleBirthDate(e) {
        console.log("***UserProfile.handlePassword")
        console.log('UserProfile.handlePassword.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handlePassword.value=',value)
        let userStore = store.userStore
        userStore.user.birthDate = value
		actions.setUserStore(userStore); 
	}

	function handleNationalId(e) {
        console.log("***UserProfile.handleNationalId")
        console.log('UserProfile.handleNationalId.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleNationalId.value=',value)
        let userStore = store.userStore
        userStore.user.nationalId = value
		actions.setUserStore(userStore); 
	}

	function handlePhone(e) {
        console.log("***UserProfile.handlePhone")
        console.log('UserProfile.handlePhone.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handlePhone.value=',value)
        let userStore = store.userStore
        userStore.user.phone = value
		actions.setUserStore(userStore); 
	}

	function handleAddress(e) {
        console.log("***UserProfile.handleAddress")
        console.log('UserProfile.handleAddress.e=',e)
        const {value} = e.target; 
        console.log('UserProfile.handleAddress.value=',value)
        let userStore = store.userStore
        userStore.user.address = value
		actions.setUserStore(userStore); 
	}

    async function handleSubmit (e)  {
        console.log("****>UserProfile.handleSubmit!")
        e.preventDefault();

		console.log("****>UserProfile.handleSubmit.state=", state)
		console.log("****>UserProfile.handleSubmit.userStore=", store.userStore)
		let formData = new FormData();

        formData.append("email", store.userStore.user.login.email);
        formData.append("password", store.userStore.user.login.password);
        formData.append("userName", store.userStore.user.name);
        formData.append("birthDate", store.userStore.user.birthDate);
        formData.append("nationalId", store.userStore.user.nationalId);
		formData.append("phone", store.userStore.user.phone);
		formData.append("address", store.userStore.user.address);
        formData.append("userStoreName", store.userStore.name);
        formData.append("regionId", store.userStore.region.id);
        formData.append("bio", store.userStore.bio);
        formData.append("url", store.userStore.url);
		formData.append("userStorePhotoUrl", state.userProfile.userStorePhoto);
		formData.append("hasUserStorePhotoUrl", state.userProfile.userStorePhoto !== '' );
		formData.append("userPhotoUrl", state.userProfile.userPhoto);
		formData.append("hasUserPhotoUrl", state.userProfile.userPhoto !== '' );	
	
        let url = process.env.REACT_APP_URL+'/my-store/'+store.userStore.id
        let methodCall = 'PUT'
        
        console.log("UserProfile.handleSubmit.url=", url)
		console.log("UserProfile.handleSubmit.methodCall=", methodCall)
		console.log("UserProfile.handleSubmit.formData=", formData)

        await fetch(url, {
            method: methodCall,
            body: formData, //JSON.stringify(state.product),
           // headers: {
           //     "Content-Type": "application/json"
           // }
        })
        .then(resp => resp.json())
        .then(data => {
			console.log('#####UserProfile.handleSubmit.data=',data)
			let newState = state.userProfile
			newState.responseMessage = data
			setState({...state, responseMessage:data})

			if (newState.responseMessage.user) {
				let login = actions.getLogin()
				console.log(">>>>>>UserProfile.store.login= (Before API call):", store.login)

				login.data.user = newState.responseMessage.user
				actions.setLogin(login)
				console.log(">>>>>>UserProfile.store.login= (After API call):", store.login)

			}
	
			console.log(">>>>>>UserProfile.state= (After API call):", state)
			
		})

        //actions.resetUserStore();
		console.log("UserProfile.userStore (after reset)=", store.userStore)
		console.log("UserProfile.state (after reset)=", state)
        //history.push('/my-store/'+store.login.data.user.userStore.id);
        //history.push('/');

	}


    function handleFile (e, fieldPhoto, fieldImage) {
        console.log('AddProductView.handleFile:', fieldPhoto, fieldImage)
        const {name, files} = e.target;
        console.log('AddProductView.handleFile.name=', name)
        console.log('AddProductView.handleFile.files=', files) 
		console.log('AddProductView.handleFile.props.index=', props.index)

        let image = files[0]

        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
				//this.setState({profileImg: reader.result})
				let newState = state.userProfile
				newState[fieldPhoto] = files[0]
				newState[fieldImage] = reader.result

				newState.mode= 'Add-' + (new Date()).getMilliseconds()
				//setState({...state, image: reader.result});
				console.log('handleFile.state= (Before) ', state)
				setState({...state, userProfile:newState})
				console.log('handleFile.state= (After) ', state)
				console.log('handleFile.newState=', newState)


            }
        }
        reader.readAsDataURL(e.target.files[0])
    }


	console.log(">>>>>>UserProfile.state=", state)

	const urlImages = process.env.REACT_APP_URL+'/images/'
	
	return (
		<div>
			{
				store.userStore && (
					<div className="userProfile-container">

						<div className='userProfile-item-left'>
							<div className='userProfile-item-left-item-01'>
								<img className='photo-perfil' src={state.userProfile.userPhotoImage} />								
								<p>{store.userStore.user.name}</p>
							</div>

							<div className='userProfile-item-left-item-02'>

								<div className='userProfile-item-left-item-02-01'>
									<img src='/images/sales.png' alt='Sales' />
								</div>
								<div className='userProfile-item-left-item-02-02'>
									<p><b>mi ventas</b></p>
									<Link to="/" className="dropdown-item">
										<p>a ventas</p>
									</Link>
									<Link to="/" className="dropdown-item">
										<p>vendidos</p>
									</Link>
								</div>

							</div>

							<div className='userProfile-item-left-item-03'>
								<div className='userProfile-item-left-item-02-01'>
									<img src='/images/cart.png' alt='Cart' />
								</div>
								<div className='userProfile-item-left-item-02-02'>
									<p><b>mi compras</b></p>
								</div>
							</div>

						</div>

						<div className='userProfile-item-right'>
							<div className='userProfile-item-right-item1'>
								<div className='userProfile-item-right-item2-perfil'>
									<p>perfil - {state.userProfile.mode}</p>
									<div className='userProfile-item-right-item2-perfil-photo'>
										<div className='userProfile-item-right-item2-perfil-photo-item1'>
											<img className='photo-perfil' src={state.userProfile.userPhotoImage} />
											<label>foto</label>
										</div>
							
										<div className='userProfile-item-right-item2-perfil-photo-item2'> 
											<input className= 'upload-file' type="file" id="file-browser-input" name="file-browser-input" ref={input => state.fileInputUserPhoto = input} onChange={ (e) => handleFile(e, 'userPhoto', 'userPhotoImage')} />

											<button className='button-blue' onClick={() => state.fileInputUserPhoto.click()}>cambiar foto</button>
										</div>
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-item'>
										<label htmlFor='titulo' className='userProfile-label'>título</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="título"
											id='titulo'
											name="titulo"
											onChange={e => handleName(e)}
											value={store.userStore.name}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-bio'>
										<label htmlFor='bio' className='userProfile-label'>bio</label>
										<textarea id="bio" name="bio" className="form-control userProfile-input" placeholder="bio" value={store.userStore.bio} onChange={e => handleBio(e)}/>
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-item'>
										<label htmlFor='url' className='userProfile-label'>url</label>
										<div className='user-profile-url'>
											<label htmlFor='url' className='url-label'>cachurero.cl/</label>
											<input
												type="text"
												className="form-control url-input"
												placeholder="url"
												id='url'
												name="url"
												value={store.userStore.url}
												onChange={e => handleUrl(e)}
											/>
										</div>
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-item'>
										<label htmlFor='region' className='userProfile-label'>Region</label>
										<select name="region" id="region" value={store.userStore.region.id} className="form-control userProfile-input" onChange={e => handleRegion(e)}>
											{regionListOptions}
										</select>
									
									</div>

								</div>
								<div className='userProfile-item-right-item2-datos-personales'>
									<p>datos personales</p>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>nombre</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="nombre"
											id='name'
											name="name"
											value={store.userStore.user.name} 
											onChange={e => handleUserName(e)}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>email</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="email"
											id='email'
											name="email"
											value={store.userStore.user.login.email}
											onChange={e => handleEmail(e)}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>contraseña</label>
										<input
											type="password"
											className="form-control userProfile-input"
											placeholder="contraseña"
											id='password'
											name="password"
											value={store.userStore.user.login.password}
											onChange={e => handlePassword(e)}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>cumpleaños</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="cumpleaños"
											id='birthdate'
											name="birthadate"
											value={store.userStore.user.birthDate}
											onChange={e => handleBirthDate(e)}
										/>
									</div>


									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>rut</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="rut"
											id='rut'
											name="rut"
											value={store.userStore.user.nationalId}
											onChange={e => handleNationalId(e)}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>teléfono</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="teléfono"
											id='phone'
											name="phone"
											value={store.userStore.user.phone}
											onChange={e => handlePhone(e)}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label className='userProfile-label'>Dirección:</label>
										<input
											type="text"
											className="form-control userProfile-input"
											placeholder="Dirección"
											id='address'
											name="address"
											value={store.userStore.user.address}
											onChange={e => handleAddress(e)}
										/>
									</div>

									<div className='error-message'>
										{
											state.responseMessage && state.responseMessage.msg && (
												<div className='error-message'>{state.responseMessage.msg}</div>
											) 
										}
									</div>

									<div className='form-group userProfile-item-right-item2-datos-salvar'>
										<button className='button-green' onClick={e => handleSubmit(e)}>salvar</button>
									</div>

								</div>
								
							</div>

							<div className='userProfile-item-right-item2'>
								<div className='userProfile-item-left-item-01'>

									<img className='photo-tendita' src={state.userProfile.userStorePhotoImage} />

									<button className='button-blue userProfile-item-left-item-01-button' onClick={() => state.fileInputUserStorePhoto.click()}>foto de capa</button>

									<input className= 'upload-file' type="file" id="file-browser-input" name="file-browser-input" ref={input => state.fileInputUserStorePhoto = input} onChange={ (e) => handleFile(e, 'userStorePhoto', 'userStorePhotoImage')} />

								</div>
							</div>
						</div>

					</div>
				)
			}



		</div>
	);
};

//DDDDDD

export default UserProfile

UserProfile.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};