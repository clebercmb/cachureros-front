import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
//import history from "../component/history";
import PropTypes from "prop-types";
import './UserProfile.css'




const UserProfile = props => {
	//const [id, setId] = useState("");
	const { store, actions } = useContext(Context);
	console.log("props.history", props.history);


	let [state, setState] = useState({
		agendaSlug: "clebermb",
		fullName: "",
		email: "",
		phone: "",
		address: "",
		mode: "Add",
		userStore: null
	});

	const saveValue = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

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

		//props.history.push("/");
	}, [store.userStore]);

	useEffect(() => {
		console.log("UserProfile.userEffect (2):Behavior before the component is added to the DOM");
		console.log("UserProfile.userEffect (2):props.match.params.id", props.match.params.id);
		console.log("UserProfile.userEffect (2):store.userStore", store.userStore);

		//props.history.push("/");
	}, [store.userStore]);

	console.log(">>UserProfile.store.useStore", store.useStore);
	let url = process.env.REACT_APP_URL + '/images-products/'

	console.log(">>UserProfile.store.regionList=", store.regionList);

    const regionListOptions = store.regionList.map((region, i) => {
        return (
			<option key={region.id} id={region.id} value={region.id}>{region.name}</option>
        )    
    })  
	console.log(">>UserProfile.regionListOptions=", regionListOptions);

	return (
		<div>
			{
				store.userStore && (
					<div className="userProfile-container">

						<div className='userProfile-item-left'>

							<div className='userProfile-item-left-item-01'>
								<img src='/images/juanita.jpg' alt="Juanita Photo" className="photo-perfil" />
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
									<p>perfil</p>
									<div className='userProfile-item-right-item2-perfil-photo'>
										<div className='userProfile-item-right-item2-perfil-photo-item1'>
											<img src='/images/juanita.jpg' alt="Juanita Photo" className="photo-perfil" />
											<label>foto</label>
										</div>
										<button className='button-blue .userProfile-item-right-item2-perfil-photo-item2'>cambiar foto</button>
									</div>


									<div className='form-group userProfile-item-right-item2-perfil-item'>
										<label htmlFor='titulo'>título</label>
										<input
											type="text"
											className="form-control"
											placeholder="título"
											id='titulo'
											name="titulo"
											value={store.userStore.user.name}

										/>
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-bio'>
										<label htmlFor='bio'>bio</label>
										<textarea id="bio" name="bio" className="form-control" placeholder="bio" value={store.userStore.user.bio} />
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-item'>
										<label htmlFor='url'>url</label>
										<div className='user-profile-url'>
											<label htmlFor='url'>cachurero.cl/</label>
											<input
												type="text"
												className="form-control"
												placeholder="url"
												id='url'
												name="url"
											/>
										</div>
									</div>

									<div className='form-group userProfile-item-right-item2-perfil-item'>
										<label htmlFor='region'>Region</label>
										<select name="region" id="region" className="form-control">
											{regionListOptions}
										</select>
									</div>


								</div>
								<div className='userProfile-item-right-item2-datos-personales'>
									<p>datos personales</p>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label>nombre</label>
										<input
											type="text"
											className="form-control"
											placeholder="nombre"
											id='name'
											name="name"
											defaultValue=''
											onChange={e => { }}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label>email</label>
										<input
											type="text"
											className="form-control"
											placeholder="email"
											id='email'
											name="email"
											defaultValue=''
											onChange={e => { }}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label>contraseña</label>
										<input
											type="text"
											className="form-control"
											placeholder="contraseña"
											id='password'
											name="password"
											defaultValue=''
											onChange={e => { }}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label>cumpleaños</label>
										<input
											type="text"
											className="form-control"
											placeholder="cumpleaños"
											id='birthdate'
											name="birthadate"
											defaultValue=''
											onChange={e => { }}
										/>
									</div>


									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label>rut</label>
										<input
											type="text"
											className="form-control"
											placeholder="rut"
											id='rut'
											name="rut"
											defaultValue=''
											onChange={e => { }}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-personales-item'>
										<label>teléfono</label>
										<input
											type="text"
											className="form-control"
											placeholder="teléfono"
											id='phone'
											name="phone"
											defaultValue=''
											onChange={e => { }}
										/>
									</div>

									<div className='form-group userProfile-item-right-item2-datos-salvar'>
										<button className='button-green'>salvar</button>
									</div>

								</div>
							</div>

							<div className='userProfile-item-right-item2'>

								<div className='userProfile-item-left-item-01'>
									<img src='/images/tendita-juanita.png' alt="Juanita Photo" className="photo-tendita" />
									<button className='button-blue'>foto de capa</button>
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
