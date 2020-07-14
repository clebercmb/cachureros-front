import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./js/component/scrollToTop";

//import injectContext from "./store/appContext";

import injectContext from "./js/store/appContext";


import { Contacts } from "./js/views/Contacts";
import { AddContact } from "./js/views/AddContact";
import UserProfile from "./js/views/UserProfile/UserProfile"
import Navbar from "./js/component/navbar/navbar";
import Carrito from "./js/views/carrito"
import RegistroUsuario from "./js/component/registros/registroUser";
import Login from "./js/component/registros/login";
import ProductView from "./js/views/ProductView/ProductView"
import AddProductView from "./js/views/AddProductView/AddProductView"
import './styles/general.css'
import "./styles/layout.css";
import { Home } from "../src/js/views/Home";
import InformationBar from "./js/component/InformationBar/InformationBar"
import { Context } from "./js/store/appContext";
import UserStoreView from "./js/views/UserStoreView/UserStoreView"


//import history from "./component/history";

export const Layout = () => {

	const { store, actions } = useContext(Context);

	console.log('==>Layout.actions.getInfoBar()', actions.getInfoBar())
	let infoBarShow = actions.getInfoBar().show

	let infobar = null
	if (infoBarShow)
		infobar = <InformationBar info="Teste"/>
	return (
		<div className="container-level-00">
			<BrowserRouter>
				<Navbar/>
				{infobar}
				<div className="container-level-01">
					<ScrollToTop>
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/registro" component={RegistroUsuario} />
							<Route exact path="/carritodecompra" component={Carrito} />
							<Route exact path="/index.html" component={Contacts} />
							<Route exact path="/" component={Home} />
							<Route exact path="/contacts" component={Contacts} />
							<Route exact path="/user-profile" component={UserProfile} />
							<Route exact path="/product-view/:id" component={ProductView} />
							<Route exact path="/user-store/:store_id" component={UserStoreView} />
							<Route exact path="/add-product-view" component={AddProductView} />
							<Route exact path="/add" component={AddContact} />
							<Route exact path="/edit/:id" component={AddContact} />
							<Route render={() => <h1 className="notfound">Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
