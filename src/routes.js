import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import Navbar from "./js/component/navbar/navbar";

const Routes = () => { 
  
    const { store, actions } = useContext(Context);
    let infoBarShow = actions.getInfoBar().show

	let infobar = null
	if (infoBarShow)
		infobar = <InformationBar info="Teste"/>
    return (
    <BrowserRouter>
        <Navbar/>
        {infobar}
        <div className="container-level-01">
            <ScrollToTop>
                <Switch>
                    <Route exact path="/resumen-pedidos" component={ResumenPedidos} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/registro" component={RegistroUsuario} />
                    <Route exact path="/carritodecompra" component={Carrito} />
                    <Route exact path="/index.html" component={Contacts} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/user-profile" component={UserProfile} />
                    <Route exact path="/product-view/:id" component={ProductView} />
                    <Route exact path="/user-store/:store_id" component={UserStoreView} />
                    <PrivateRoute exact path="/add-product-view" component={AddProductView} />
                    <Route exact path="/add" component={AddContact} />
                    <Route exact path="/edit/:id" component={AddContact} />
                    <Route exact path="/message/:user_id" component={Message} />	
                    <Route exact path="/not-allowed/" component={NotAllowed} />
                    <Route render={() => <h1 className="notfound">Not found!</h1>} />
                </Switch>
            </ScrollToTop>
        </div>
    </BrowserRouter>
)}

export default Routes