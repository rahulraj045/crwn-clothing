import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBDTptkx_0L4TIxqIIRiT8eCYgCSNxNaCk",
  authDomain: "crwn-db-b3501.firebaseapp.com",
  projectId: "crwn-db-b3501",
  storageBucket: "crwn-db-b3501.appspot.com",
  messagingSenderId: "1072465656901",
  appId: "1:1072465656901:web:168dacc5aab290f77bb72c",
  measurementId: "G-1BDS7PXMFK"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();


provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const CreateUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef);

  console.log(userDocRef);
  console.log(userSnapshot);

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = Date();

    try{
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

      console.log("Created");
    }catch(error){
      console.log(`Error creating the user: ${error.message}`);
    }
  }else{
    console.log("Not created");
  }

  return userDocRef
};







