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


	const [state, setState] = useState({
		agendaSlug: "clebermb",
		fullName: "",
		email: "",
		phone: "",
		address: "",
		mode: "Add"
	});

	const saveValue = e => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	};

	useEffect(() => {
		console.log("Behavior before the component is added to the DOM");
		console.log("props.match.params.id", props.match.params.id);

		actions.setInfoBar(true, 'Configuración', '')
		if (props.match.params.id !== undefined) {
			console.log("setting up mode");
			const contacts = store.contacts;
			const contact = contacts.find(c => c.id == props.match.params.id);
			console.log("contact found", contact);
			setState({
				...state,
				id: contact.id,
				agendaSlug: contact.agenda_slug,
				fullName: contact.full_name,
				email: contact.email,
				phone: contact.phone,
				address: contact.address,
				mode: "Edit"
			});
		}

		//props.history.push("/");
	}, []);

	return (	
		<div>
		{/*<InformationBar info="setup"/>*/}

		<div className="userProfile-container">

			<div className='userProfile-item-left'>
				
				<div className='userProfile-item-left-item-01'> 
					<img src='/images/juanita.jpg' alt="Juanita Photo" className="photo-perfil" />
					<p>Juanita</p>
				</div>

				<div className='userProfile-item-left-item-02'> 
				
					<div className='userProfile-item-left-item-02-01'>
						<img src='/images/sales.png' alt='Sales'/>
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
						<img src='/images/cart.png' alt='Cart'/>
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
							<label>título</label>
						
							<input
								type="text"
								className="form-control"
								placeholder="título"
								id='titulo'
								name="titulo"
															
							/>
						</div>

						<div className='form-group userProfile-item-right-item2-perfil-bio'>
							<label>bio</label>
							<textarea id="bio" name="bio"  className="form-control" placeholder="bio"/>
						</div>

						<div className='form-group userProfile-item-right-item2-perfil-item'>
							
							<label>url</label>

							<div className='user-profile-url'>
								<label>cachurero.cl/</label>
								<input 
									type="text"
									className="form-control"
									placeholder="url"
									id='url'
									name="url"
									
									
								/>
							</div>
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
								onChange={e => {}}
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
								onChange={e => {}}
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
								onChange={e => {}}
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
								onChange={e => {}}
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
								onChange={e => {}}
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
								onChange={e => {}}
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
		</div>
	);
};

//DDDDDD

export default UserProfile

UserProfile.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object
};
