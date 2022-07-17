import { initializeApp } from "firebase/app";
import {
  firebase,
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDGbCWhc2OE4tGm-DWxfx4oHaXWcHlxSo",
  authDomain: "ecommerce-react-two-db.firebaseapp.com",
  projectId: "ecommerce-react-two-db",
  storageBucket: "ecommerce-react-two-db.appspot.com",
  messagingSenderId: "563201791281",
  appId: "1:563201791281:web:3eb05e971b72c6c2c64c10",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//Recieve response.user.uid from login method in sign-in.js
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalData = {}
) => {
  //create document object from auth?
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  //create a db formatted doc, or draft doc, from userDocRef
  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //create user document in users collection
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("user doc creation error: ", error);
    }
  }
  //if user data exists
  //do nothing? Maybe set user in state for rendering user data?
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
