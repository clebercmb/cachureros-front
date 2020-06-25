import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = (props) => {

	return (

		

		<nav id="menu" className="navbar navbar-light bg-light mb-3">
			{/* <nav id="menu" className="navbar navbar-light bg-light mb-3"> */}
			<ul>
				<li> Logo </li>
				<li> Search</li>
				<li> Carrito</li>
				<li> Notificación</li>
				<li> User</li>
			</ul>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);

}

export default Navbar