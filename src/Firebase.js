import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import config from "./components/Config"

firebase.initializeApp(config)

const auth = firebase.auth()
const db = firebase.firestore()
export  {auth,db}