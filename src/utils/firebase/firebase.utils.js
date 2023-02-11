// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
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

//used to populate product db for 
export const addCollectionAndDocuments = async(collectionKey, ObjectsToAdd)=>{
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    ObjectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        console.log(`doc`, docRef);
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