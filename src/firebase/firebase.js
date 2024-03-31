import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyA0cZJ8UmlRD39G5qLt0Uw0BdfAfpNOmas",
	authDomain: "instagram-clone-bc18e.firebaseapp.com",
	projectId: "instagram-clone-bc18e",
	storageBucket: "instagram-clone-bc18e.appspot.com",
	messagingSenderId: "419253365831",
	appId: "1:419253365831:web:758196001cd6180da1d562",
	measurementId: "G-PGHNYETT48",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
