import React, {useEffect, useState} from "react"
import './SendMessageView.css'

const SendMessageView = (props) => {

    useEffect(() => {
        console.log("SendMessageView useEffect 1: Behavior before the component is added to the DOM");
        console.log('SendMessageView.props.match.params.receiverId=', props.match.params.receiverId)
        console.log('SendMessageView.props.match.params.message=', props.match.params.message)

	}, []);


    return(
        <div className="container-send-messave-view">
            
        </div>
    )
}

export default SendMessageView