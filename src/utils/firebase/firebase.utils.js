// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';

import {
    getFirestore, 
    doc, 
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,

} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ksVsZu8DgS_PNmYsyXLW0zhNP3fHZas",
  authDomain: "plant-store-db-fbb3e.firebaseapp.com",
  projectId: "plant-store-db-fbb3e",
  storageBucket: "plant-store-db-fbb3e.appspot.com",
  messagingSenderId: "78008058470",
  appId: "1:78008058470:web:d0ce2c4b06f3defb35a3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider)


//used to populate product db for 
export const addCollectionAndDocuments = async(collectionKey, ObjectsToAdd)=>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    ObjectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
};

export const getCollectionAndDocuments = async() =>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}

export const CreateAuthUserWithEmailAndPassword = async( email, password) => {
    if(password && email ){
        return await createUserWithEmailAndPassword(auth, email, password)
    }
}
export const SignAuthUserWithEmailAndPassword = async (email, password) => {
    if(password && email){
        return await signInWithEmailAndPassword(auth, email, password)
    }else{
        console.log('email or password missing')
    }
    
    
}
export const createUserDocumentFromAuth = async (userAuth) =>{
    console.log(userAuth);
    
    const userRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userRef);
    console.log(userSnapshot)
    if(!userSnapshot.exists()){
        const{email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userRef, {
                email, 
                createdAt,
            })
        }
        catch(error){
            console.log('error creating the user ', error);
        }

    }
    return userRef
}

export const userAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}

export const signOutUser = async() =>{
    try{
       await signOut(auth);
    }catch(err){
        console.log(err);
    }
}