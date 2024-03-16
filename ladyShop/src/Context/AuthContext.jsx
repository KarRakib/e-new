import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext()
import app from '../Firebase/firebase.config'
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name:'kar'})
    const [loader, setLoader] = useState(true)
    const UserRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const UserLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
        console.log(currentUser);
            setUser(currentUser)
        })
        return ()=> unsubscribe
    },[])
    const Update = (name,photo) =>{
        updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const authInfo = {user,Update,LogOut,UserRegister,UserLogin, loader,setLoader}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;