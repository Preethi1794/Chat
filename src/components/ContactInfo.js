import React from 'react'
import '../App.scss';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function ContactInfo({contact}) {
    return (
        <div className="contactInfoContainer">

            <div className="contactInfo__top">
                <div className="Icon">
                    <div className={contact.color}>
                        <div className={contact.shape}>
                        </div>  
                    </div>
                </div>
                <h5>{contact.username}</h5>
                <p>{contact.email}</p>
                <div className="contactInfo__icons">
                    <CallIcon/>
                    <VideocamIcon/>
                    <EmailIcon/>
                </div>
            </div>

            <div className="contactInfo__center">
                <p className="contactInfo__title">Terhubung</p>
                <div className="contactInfo__card">
                    <div className="contactInfo__connection">
                        <InstagramIcon/>
                        <p>{contact.instagramId}</p>
                    </div>
                    <div className="contactInfo__connection">
                        <TwitterIcon/>
                        <p>{contact.twitterId}</p>                        
                    </div>
                    <div className="contactInfo__connection">
                        <FacebookIcon/>
                        <p>{contact.facebookId}</p>                        
                    </div>
                </div>
            </div>

            <div className="contactInfo__bottom">
                <p className="contactInfo__title">Media</p>
                <div className="media__card">
                    <div className="OrangeSquare">
                        <p className="format">PDF</p>
                    </div>
                    <p>React.pdf</p>
                </div>
                <div className="media__card">
                    <div className="BlueSquare">
                        <p className="format">ZIP</p>
                    </div>
                    <p>Firebase.ppt</p>
                </div>
                <div className="media__card">
                    <div className="GreenSquare">
                        <p className="format">DOC</p>
                    </div>
                    <p>Router.ppt</p>
                </div>
            </div>
            
        </div>
    )
}

export default ContactInfo
