import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAp7gLTi7jFgiINdccRGLfmVozwqOaXbvE",
    authDomain: "apartment-listing-45b6c.firebaseapp.com",
    projectId: "apartment-listing-45b6c",
    storageBucket: "apartment-listing-45b6c.appspot.com",
    messagingSenderId: "933074869301",
    appId: "1:933074869301:web:3741cf2941ccc8b32e657c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
