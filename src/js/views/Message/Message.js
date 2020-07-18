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


    


    useEffect(() => {
        console.log("Message useEffect 1: Behavior before the component is added to the DOM");
        console.log('Message.props.match.params.user_id=', props.match.params.user_id)
        actions.fetchUserMessages(props.match.params.user_id);
        setMessages(store.userMessages)
        console.log("Message.useEffect 1.store.userMessages", store.userMessages);
        console.log('Message.useEffect 1.messages=', messages)
	}, []);

	useEffect(() => {
		console.log("Message useEffect 2: Behavior before the component is added to the DOM");
        setState({...state, userMessages: store.userMessages});
		console.log("Message.useEffect 2.store.userMessages=", store.userMessages);
        console.log("Message.useEffect 2.state.userMessages", state.userMessages);
        setMessages(store.userMessages)
        actions.setInfoBar(true, 'Messages', store.userStore.userName)
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

    let userMessages = state.userMessages
    if(userMessages) {
        userMessages = userMessages.map((p, i) => {
            return (
                <UserMessage key={i}  id={p.id} user_from={p.user_from} photo={p.user_from_photo} message={p.message} link={p.link} status={p.status} type={p.type} date={p.date}/>
            )
        })
    }

   /*  let userMessages = state.userMessages
    console.log('Messages.store.userMessages=', store.userMessages)
    console.log('Messages.usersMessages=', userMessages)

    if(userMessages)
        userMessages = state.userMessages.map((p, i) => {
            return (
                <UserMessage />
            )
        }) */

    return (
        <div className='message-container'>
            {userMessages}
        </div>
    )
}

export default Message