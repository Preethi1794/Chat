import React, { useEffect, useRef, useState } from 'react';
import '../App.scss';
import ChatRoom from './ChatRoom';
import ContactInfo from './ContactInfo';
import SearchIcon from '@material-ui/icons/Search';
import {firestore} from '../firebase'

/* export function FindIcon(){
  const circles = ["PurpleCircle","BlueCircle","GreenCircle"]
  const shapes = ["Square", "Circle"]
  const random_circle = Math.floor(Math.random() * circles.length);
  const random_shape = Math.floor(Math.random() * shapes.length);

  return (
    <div className={circles[random_circle]}>
      <div className={shapes[random_shape]}>
      </div>  
    </div>
    )
}  */

function Contacts({contact, onClick}){
  return(
    <div onClick={() => onClick(contact)} className="contact__card">                 
      <div className="Icon">
        <div className={contact.color}>
          <div className={contact.shape}>
        </div>  
      </div>
      </div>                          
      <div className="Contact_Username">
        <h5>{contact.username}</h5>
        <p>Lorem ipsum dolore</p>
      </div>
      <div className="Time">
        <p>2min</p>
      </div>  
    </div>
  )
}


function Contact() {

  const [contacts, setContacts] = useState([])
  const [showchat, setShowChat] = useState(false)
  const [contact, setContact] = useState([])
  const IconRef = useRef()

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async() => {
    await firestore
      .collection('contacts')
      .onSnapshot(snapshot => {
        setContacts(snapshot.docs.map(doc => ({
          id: doc.id,
          contact: doc.data()
        })))
      })               
  }

  const onContactClick = (contact) => {
      setShowChat(true)
      setContact(contact)
    }

  return (
    <div className="messageContainer">
      <div className="contactsContainer">
          <div className="contact__search">
            <SearchIcon/>
            <input ref={IconRef} placeholder="Search contact" type="text" />
          </div>        
          {
            contacts?.map(({id,contact}) => (  
              <Contacts key={id} contact={contact} onClick={onContactClick}/>            
            ))
          }    
      </div> 
      {
        showchat && contact && 
          <>
            <ChatRoom contact={contact}/>
            <ContactInfo contact={contact}/>
          </>
      }            
    </div>
  );
}

export default Contact;
