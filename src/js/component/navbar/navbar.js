import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import { Context } from "../../store/appContext";

const Navbar = (props) => {
  const { store, actions } = useContext(Context);

  console.log("==>Layout.actions.getInfoBar()", actions.getInfoBar());

  const [state, setState] = useState({
    login: {}, 
    userPhoto:'',
  
	});


	useEffect(() => {
		console.log("Navbar.useEffect 1: Behavior before the component is added to the DOM");
		console.log("Navbar.useEffect 1: store.login", store.login);
    setState({...state, login: store.login});
    console.log("Navbar.useEffect 1: state", state);
    console.log("Navbar.useEffect 1: state.login", state.login);

    let login = actions.getLogin()
    let newState = state
  
    if(login.data) {
      const urlImages = process.env.REACT_APP_BACK_IMAGES
      newState.userPhoto = urlImages+login.data.user.photoUrl
    } else {
      newState.userPhoto='/images/user.png'
    } 

    setState({...state, state:newState})

  }, [store.login]);


  let infoBar = actions.getInfoBar().info
  let infoStore = actions.getInfoStore()

  let user = state.login.data ? state.login.data.user : undefined;
  console.log('Navbar.user=', user)



  return (
    <div className="container-level-01">
      <nav id="navbar" className="nav-bar">
        <div className="nav-bar-logo">
            <Link
              to="/"
              onClick={(e) => {
                actions.setInfoBar(false, "");
              }}
            >
              <img src="/images/Cachurero.svg" alt="Logo" />
            </Link>
        </div>
        <div className="nav-bar-menu">
          <input
            type="search"
            className="form-control nav-bar-search"
            placeholder="Seach"
          />
          <Link to="/carritodecompra">
            <img src="/images/cart.png" alt="Cart" />
            {
              (store.userCart.products.length > 0) && (
                <label className='cart-products-amount' >{store.userCart.products.length}</label>
              )
            }
          </Link>
          {
            !!actions.getLogin().data && actions.getLogin().data.user && (
              <Link to={`/messages/${actions.getLogin().data.user.id}`}>
                <img src="/images/notification.png" alt="Notification" />
              </Link>
            )
          }
          <div className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img className="nav-bar-user" src={state.userPhoto} alt="User" />
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {
                !actions.getLogin().data &&(
                  <Link to="/login" className="dropdown-item">
                    Iniciar Sesión
                  </Link>
                )
              }
              {
                !actions.getLogin().data &&(
                  <Link to="/registro" className="dropdown-item">
                    Nueva Cuenta
                  </Link>
                )
              }
              {
                !!actions.getLogin().data && actions.getLogin().data.user && (
                  <Link to={`/order/user/${actions.getLogin().data.user && actions.getLogin().data.user.id}`} className="dropdown-item" onClick={()=>actions.resetProduct()}>
                    Compras
                  </Link>
                )
              }
              {
                !!actions.getLogin().data && actions.getLogin().data.user && (
                  <Link to={`/my-store/${actions.getLogin().data.user && actions.getLogin().data.user.id}/sells`} className="dropdown-item" onClick={()=>actions.resetProduct()}>
                    Ventas
                  </Link>
                )
              }
              {
                !!actions.getLogin().data && actions.getLogin().data.user && (
                  <Link to="/product" className="dropdown-item" onClick={()=>actions.resetProduct()}>
                    Nuevo Producto
                  </Link>
                )
              }
              
              {
                !!actions.getLogin().data && actions.getLogin().data.user && (
                  <Link to={`/user-profile/${actions.getLogin().data.user.userStore && actions.getLogin().data.user.userStore.id}`} className="dropdown-item">
                    Configuración
                  </Link>
                )
              }

              {
                !!actions.getLogin().data && actions.getLogin().data.user && (
                  <Link to= {`/my-store/${actions.getLogin().data.user.userStore && actions.getLogin().data.user.userStore.id}`} className="dropdown-item">
                    Mi tendita
                  </Link>
                )
              }

              {
                !!actions.getLogin().data && actions.getLogin().data.user && (
                  <Link to= '/' className="dropdown-item" onClick={()=>actions.resetLogin()}>
                    Logout
                  </Link>
                )
              }


            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
