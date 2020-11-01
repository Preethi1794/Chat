import React, { useRef, useState, useContext, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firestore} from '../firebase'
import ChatMessage from './ChatMessage'
import firebase from 'firebase'
import { AuthContext } from '../contexts/AuthContext';
import SearchIcon from '@material-ui/icons/Search';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SettingsIcon from '@material-ui/icons/Settings';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import OnHoverScrollContainer from "./CustomScrollDiv";
import '../App.scss'

export function ChatRoom({contact}) {
    const {currentUser} = useContext(AuthContext)

    const dummy = useRef()

    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: "id"});
    const [formValue, setFormValue] = useState('')
    const keyRef = useRef()


    useEffect(() => {    
        dummy.current.scrollIntoView({ behavior: "smooth"});     
    }, [messages])

    const sendMessage = async(e) => {
        e.preventDefault();
        const {uid} = currentUser;
        try {
            await messagesRef.add({
                text: formValue,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
            })
            setFormValue('')  
            
        } catch (error) {
            alert(error)
        }
         
    }


    return(
        <>        
            <div className="chatContainer">
                <div ref={keyRef} className="chat__search">
                    <div className="chatSearch__left">
                        <SearchIcon/>
                        <input type="text" />
                    </div>
                    <div className="chatSearch__center">
                        <p>{contact.username}</p>
                        <FiberManualRecordIcon/>
                    </div>
                    <div className="chatSearch__right">
                        <SettingsIcon/>
                    </div>                
                </div>
                
                <main>
                    <OnHoverScrollContainer>
                        { messages && messages.map(msg => 
                            <ChatMessage 
                                key={msg.id} 
                                message={msg} 
                                contact={contact}
                            />)
                        }                     
                        <span ref={dummy}></span> 
                    </OnHoverScrollContainer>                                            
                </main>
                
                <div className="sendMessage">
                    <form onSubmit={sendMessage}>
                            <input placeholder="Type Something" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
                            <button type="submit"></button>
                    </form> 
                    <div className="sendMessage__icon">
                        <AttachFileIcon/>
                        <EmojiEmotionsIcon/>
                    </div>                    
                </div>   

            </div>            
        </>      
    )
}

export default ChatRoom
