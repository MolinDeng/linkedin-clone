// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxY-EwuCxdjL4oivh4S_KPbywdCKpkMpg",
  authDomain: "linkedin-clone-1cfda.firebaseapp.com",
  projectId: "linkedin-clone-1cfda",
  storageBucket: "linkedin-clone-1cfda.appspot.com",
  messagingSenderId: "975537043627",
  appId: "1:975537043627:web:bba8219055f5f6635c1fee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); // get DB
const auth = getAuth(app); // get Auth
const colRef = collection(db, "posts"); // collection reference to "posts" (collection ID)
export { db, auth, colRef };
