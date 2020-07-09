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
						   <Link to="/carritodecompra">
							   <img src='/images/cart.png' alt='Cart'/>
						   </Link>
						</li>
						<li>
							<img src='/images/notification.png' alt='Notification'/>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link " href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<img className="user" src='/images/user.png' alt='User'/>
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<Link to="/login" className="dropdown-item">Iniciar Sesión</Link>
								<Link to= "/registro" className="dropdown-item">Nueva Cuenta</Link>
								
									
								<Link to="/user-profile" className="dropdown-item"> 
									Configuración
								</Link>
							
							</div>
						</li>

					</ul>
				</li>
			</ul>
		
		</nav>




	);

}

export default Navbar