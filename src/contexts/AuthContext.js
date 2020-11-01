import React, { useEffect, createContext, useState } from 'react'
import { auth } from '../firebase'

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log("in authcontext")
            setCurrentUser(user)
            setPending(false)
            console.log(user)
        });

        return () => {
            unsubscribe();
        }
    }, [])

    if(pending){
        return <>Loading...</>
    }

    return(
        <AuthContext.Provider value={{currentUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}