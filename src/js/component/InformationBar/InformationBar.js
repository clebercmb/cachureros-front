import React, { useState, useEffect, useContext } from "react";
import "./InformationBar.css";

import { Context } from '../../store/appContext';


const InformationBar = (props) => {


	const { store, actions } = useContext(Context);

	console.log('==>Layout.actions.getInfoBar()', actions.getInfoBar())

	let infoBar = actions.getInfoBar()
	let infoStore = actions.getInfoStore()

	console.log('InformationBar.infoBar=', infoBar)
	console.log('InformationBar.infoStore=', infoStore)
	
	return (

		<div className="infobar-container">
			<div className="container-level-01">

				<div className='infobar-container-01'> 
				{/* 
					{infoBar.image && <img src={infoBar.image} alt="Juanita Photo" className="infobar-container-photo-perfil" />}
					
					{infoStore.userName && <label className="infobar-container-store-name">{infoStore.userName && infoStore.userName}</label>}

					{infoStore.storeName && <div className='infobar-container-separator'/>}
 */}
					<label className="infobar-container-info">{infoBar.info && infoBar.info}</label>
					<label className="infobar-container-info2">{infoBar.info2 && infoBar.info2}</label>
					
				</div>

			</div>
		</div>


	);

}

export default InformationBar