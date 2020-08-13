import React, { useState, useEffect, useContext } from "react";
import { Context } from '../../store/appContext';
import { Redirect } from 'react-router-dom';
import UserMessage from '../../component/UserMessage/UserMessage'
import "./Message.css"


const Message = (props)  => {
    console.log('***Message***')
    const { store, actions } = useContext(Context);

    const [state, setState] = useState({
        userMessages: null
    });

    const [messages, setMessages] = useState();


    async function deleteMessage (id) {
        console.log('Message.deleteMessage.id=', id)
        
        await actions.deleteUserMessages(id)
  //      actions.fetchUserMessages('deleteMessage.props.match.params.user_id=', props.match.params.user_id);
  //      await actions.fetchUserMessages(props.match.params.user_id)
    }

    useEffect(() => {
        console.log("Message useEffect 1: Behavior before the component is added to the DOM");
        console.log('Message.props.match.params.user_id=', props.match.params.user_id)
        actions.fetchUserMessages(props.match.params.user_id);
        actions.setInfoBar(true, 'Mensajes', store.login.data.user.name)
        console.log("Message.useEffect 1.store.userMessages", store.userMessages);
        console.log('Message.useEffect 1.messages=', messages)
	}, []);

	useEffect(() => {
        console.log("Message useEffect 2: Behavior before the component is added to the DOM");
        let newState = state
        newState.userMessages = store.userMessages
        setState({...state, state: newState});
		console.log("Message.useEffect 2.store.userMessages=", store.userMessages);
        console.log("Message.useEffect 2.state.userMessages", state.userMessages);
        setMessages(store.userMessages)
 
        console.log('Message.useEffect 2.messages=', messages)
    }, [store.userMessages]);
    

    console.log('Message.props.match.params.user_id=', props.match.params.user_id)
    let user = actions.getUser();
    console.log('Message.user=', user)
    console.log('Message user.id === props.match.params.user_id', user.id === props.match.params.user_id)
    if (user.id !== props.match.params.user_id ) {
        console.log('Not allowed')
        return <Redirect to={{ pathname: '/not-allowed/' }} />

    }
    console.log('Messages.usersMessages=', state.userMessages)

    const urlImages = process.env.REACT_APP_BACK_IMAGES
    let userMessages = state.userMessages
    if(userMessages) {
        userMessages = userMessages.map((p, i) => {
            return (
                <UserMessage key={i}  id={p.id} user_from={p.sender.name} photo={urlImages+p.sender.photoUrl} message={p.message} link={p.link} status={p.messageStatus.name} type={p.messageType.name} date={p.createdAt} onDelete={deleteMessage}/>
            )
        })
    }

    return (
        <div className='message-container'>
            {userMessages}
        </div>
    )
}

export default Message