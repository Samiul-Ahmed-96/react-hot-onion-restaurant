import { initializeApp } from 'firebase/app';
import firebaseConfig from './FirebaseConfig';

const initAuthentication = () =>{
    initializeApp(firebaseConfig);
}
export default initAuthentication;