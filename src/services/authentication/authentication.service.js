//import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

const auth=getAuth()

export const loginRequest = async (email, password) => 
  signInWithEmailAndPassword(auth, email, password);