import React from 'react'
import './UserMessage.css'
import { Link } from "react-router-dom";

const UserMessage = (props) => {
    return (
        <div className='container-user-message'>
            <div className='container-user-message-01'>
                <div className="container-user-message-01-a">
                    <img className='container-user-message-01-a-1' src={props.photo}/>
                </div>
                <div className="container-user-message-01-b">
                    <Link to={props.link} className='container-user-message-01-b'>
                        <label className='container-user-message-01-b-1'>{props.message}</label>
                    </Link>
                </div>                
            </div>

            <div className="container-user-message-05">
                <label className='container-user-message-05-a'>{props.date}</label>
            </div>

            <div className="container-user-message-04">
                <label className='container-user-message-04-a'>{props.type}</label>
            </div>

            <div className="container-user-message-02">
                <label className='container-user-message-02-a'>{props.status}</label>
            </div>
            
            <div className="container-user-message-03">
                <button className="btn" onClick={() => props.onDelete(props.data)}>
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
        </div>
    )
}

export default UserMessage