import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./js/component/scrollToTop";

//import injectContext from "./store/appContext";

import injectContext from "./js/store/appContext";


import { Contacts } from "./js/views/Contacts";
import { AddContact } from "./js/views/AddContact";
import UserProfile from "./js/views/UserProfile"
import Navbar from "./js/component/navbar";

import "./layout.css";
import { Home } from "../src/js/views/Home";


//import history from "./component/history";

export const Layout = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar/>
					<Switch>
						<Route exact path="/index.html" component={Contacts} />
						<Route exact path="/" component={Home} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/user-profile" component={UserProfile} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/edit/:id" component={AddContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
