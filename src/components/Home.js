import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { SignOut } from './Auth';

function Home() {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="home">
        <h3>{currentUser.displayName}</h3>
        <SignOut/>
    </div>
  );
}

export default Home;
