import React, { useContext } from 'react';
import './App.scss';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { Switch, Route} from "react-router-dom";
import * as ROUTES from './routes'
import {Folder, Settings, Calendar, Collection} from './components/NoData'
import {SignIn} from './components/Auth'
import Home from './components/Home'
import { AuthContext } from './contexts/AuthContext';

function App() {
  const {currentUser} = useContext(AuthContext)
  
  return (
    <>    
      <Route path={ROUTES.SIGNIN} exact>
        <SignIn />
      </Route>
      {currentUser &&     
      <div className="App">
        <div className="Container">          
            <Navigation/>
            <Switch>                                
              <Route path={ROUTES.HOME}>
                <Home />
              </Route>
              <Route path={ROUTES.CONTACT}>
                <Contact />
              </Route>
              <Route path={ROUTES.FOLDER}>
                <Folder/>
              </Route>            
              <Route path={ROUTES.COLLECTION}>
                <Collection />
              </Route>
              <Route path={ROUTES.CALENDAR}>
                <Calendar />
              </Route>
              <Route path={ROUTES.SETTINGS}>
                <Settings />
              </Route>
            </Switch>          
        </div>   
      </div>
      }
      </>
  );
}

export default App;
