//import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../App';

export const loginRequest = async (email, password) => 
  signInWithEmailAndPassword(auth, email, password);