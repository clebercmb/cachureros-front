import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = (props) => {

	return (

	
		<nav id="navbar" className="navbar2">
			{/* <nav id="menu" className="navbar navbar-light bg-light mb-3"> */}
				<ul>
					<li>	
						<Link to="/">
							<img src='/images/Cachurero.svg' alt='Logo'/>
						</Link>
					</li>
					<li className='right'>
						<ul className='right'>
							<li>	
								<input type="search" className= "form-control" placeholder="Seach"></input>
							</li>
							<li>
								<img src='/images/cart.png' alt='Cart'/>
							</li>
							<li>
								<img src='/images/notification.png' alt='Notification'/>
							</li>

							<li className="nav-item dropdown">
								<a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<img className="user" src='/images/user.png' alt='User'/>
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="#">Iniciar Sesión</a>
									<a className="dropdown-item" href="#">Nueva Cuenta</a>
									<a className="dropdown-item" href="#">
										
									<Link to="/user-profile"> 
										Configuración
									</Link>
									</a>
								</div>
							</li>

						</ul>
					</li>
				</ul>
		
		</nav>




	);

}

export default Navbar