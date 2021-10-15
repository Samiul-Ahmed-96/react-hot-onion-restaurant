import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

const useFirebase = () => {

   const [users,setUsers] = useState({})
   const auth = getAuth();

   const signInGoogle =()=>{
       const googleProvider = GoogleAuthProvider();
       signInWithPopup(auth,googleProvider)
       .then(res => setUsers(res.user))
   }

   const logOut = () =>{
       signOut(auth)
       .then(()=>{})

   }
   useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth,user =>{
           if(user){
               setUsers(user)
           }else{
               setUsers({})
           }
       })
       return()=> unsubscribed;
   },[])
   
   return{
       users,
       signInGoogle,
       logOut
   }
};

export default useFirebase;