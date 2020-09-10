import React, {useState, useContext} from 'react'
import { Context } from "../../store/appContext";
import './UserMessage.css'
import { Link } from "react-router-dom";

const UserMessage = (props) => {

    const { store, actions} = useContext(Context);
    const [showResponse, setShowResponse] = useState(false)

    const [messageList, setMessageList] = useState({
        message:{}
    })

    const [responseMessage, setResponseMessage] = useState({})


    function handleField(e, senderId) {
        console.log('>>UserMessage.handleField=', senderId)

        let newMessageList = messageList
        const {value} = e.target
        console.log('>>UserMessage.handleField.value=', value)
        newMessageList['message_'+senderId]= value
        setMessageList(newMessageList)
    }

    async function handleMessage(e, senderId) {
        console.log('>>UserMessage.handleMessage.senderId=', senderId)
        e.preventDefault();
        if (!messageList['message_'+senderId])
            return

        console.log('>>UserMessage.handleMessage.message=', 'message_'+senderId)
        console.log('>>UserMessage.handleMessage.message=', messageList['message_'+senderId])
        
        let url = process.env.REACT_APP_URL+'/message/'
        console.log("flux.fetchLogin.url="+url)

        let methodCall = 'POST'

        console.log("flux.fetchLogin.methodCall=", methodCall)
    
        let message = {
            senderId: actions.getLogin().data.user.userStore.id,
            receiverId: senderId,
            messageTypeId: 1, 
            messageStatusId: 1,
            message: messageList['message_'+senderId], 
            link: ""	
        }

        await fetch(url, {
            method: methodCall,
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log("flux.handleMessage.data", data);
            setResponseMessage(data)

        })
        .catch((error) => {
            console.log("flux.handleMessage.error", error);
        });
    
        setShowResponse(false)
    }

    return (
        <div>
            <div className='container-user-message'>
                <div className='container-user-message-01'>
                    <div className="container-user-message-01-a">
                        <img className='container-user-message-01-a-1' src={props.photo} />
                    </div>

                    <div className="container-user-message-01-b" onClick={()=>setShowResponse(showResponse ? false:true)}>
                        <label className='container-user-message-01-b-1'>{props.message}</label>
                    </div>
                </div>


                <div className="container-user-message-05">
                    <label className='container-user-message-05-a'>{props.date}</label>
                </div>

                <div className="container-user-message-04">
                    <label className='container-user-message-04-a'>{props.type}</label>
                </div>

                <div className="container-user-message-03">
                    <button className="btn" onClick={() => props.onDelete(props.id)}>
                        <i className="fas fa-trash-alt" />
                    </button>
                </div>
            </div>
            {
                showResponse  &&  (
                    <form>
                        <div className='send-user-messsage'>
                            <label htmlFor="userMessage">Mensaje:</label>
                            <input type='text' id='userMessage' name='userMessage' className='send-user-messsage-input' onChange={e=>handleField(e, props.senderId)}/>
                            <button className='send-user-message-button' onClick={e=>handleMessage(e, props.senderId)}>Enviar</button>

                        </div>
                    </form>
                )
            }
        </div>


    )
}

export default UserMessage