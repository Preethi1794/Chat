import React from 'react';
import '../App.scss';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import CollectionsIcon from '@material-ui/icons/Collections';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import EventIcon from '@material-ui/icons/Event';
import EcoIcon from '@material-ui/icons/Eco';
import {Link} from 'react-router-dom'
import * as ROUTES from '../routes'
import {motion} from 'framer-motion'


function Navigation() {

  const scaleVariants = {
    hover: {
      scale: 1.5,
    }
  }

  return (
        <ul className="SideNav">
            <Link to={ROUTES.HOME}>
              <motion.li 
                variants={scaleVariants}
                whileHover="hover">
                <EcoIcon style={{color: "#8c83fe"}}/>
              </motion.li>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <motion.li 
                variants={scaleVariants}
                whileHover="hover">
                <ChatIcon />
              </motion.li>
            </Link>             
            <Link to={ROUTES.FOLDER}>
              <motion.li 
                variants={scaleVariants}
                whileHover="hover">
                <LocalMallIcon />
              </motion.li>
            </Link>
            <Link to={ROUTES.COLLECTION}>
              <motion.li 
                variants={scaleVariants}
                whileHover="hover">
                <CollectionsIcon />
              </motion.li>
            </Link>
            <Link to={ROUTES.CALENDAR}>
              <motion.li 
                variants={scaleVariants}
                whileHover="hover">
                <EventIcon />
              </motion.li>
            </Link>
            <Link to={ROUTES.SETTINGS}>
              <motion.li 
                variants={scaleVariants}
                whileHover="hover">
                <SettingsIcon />
              </motion.li>
            </Link>
        </ul>
  );
}

export default Navigation;
