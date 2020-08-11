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
      <nav id="navbar" className="navbar2">
        <ul>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                actions.setInfoBar(false, "");
              }}
            >
              <img src="/images/Cachurero.svg" alt="Logo" />
            </Link>
          </li>
          <li className="right">
            <ul className="right">
              <li>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Seach"
                ></input>
              </li>
              <li>
                <Link to="/carritodecompra">
                  <img src="/images/cart.png" alt="Cart" />
                </Link>
              </li>
              <li>

                {
                  !!actions.getLogin().data && actions.getLogin().data.user && (
                    <Link to={`/messages/${actions.getLogin().data.user.id}`}>
                      <img src="/images/notification.png" alt="Notification" />
                    </Link>
                  )
                }


              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="user" src={state.userPhoto} alt="User" />
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
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
