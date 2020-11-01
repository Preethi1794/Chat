import React from 'react'
import { auth } from '../firebase';
import '../App.scss'

function ChatMessage(props) {

    const {text, uid} = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div className={`message ${messageClass}`}>
            {
                messageClass==="received" && 
                <div className="Icon">
                    <div className={props.contact.color}>
                        <div className={props.contact.shape}>
                        </div>  
                    </div>
                </div>
            }
            
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage
