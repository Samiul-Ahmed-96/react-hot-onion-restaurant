import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/Firebase.Init';

initializeFirebase();

const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    //handle google sign in
    const signInUsingGoogle = (e) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {  
                setError(error.message);
            })
    }

    //Sign Out handler
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{
        setUser({});
        })
    }
    //observer
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,user =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
        return()=> unsubscribed;
    },[])
    

    return {
        user,
        error,
        signInUsingGoogle,
        handleSignOut

    }
}

export default useFirebase;