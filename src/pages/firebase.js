// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZwJ37iMSqnOmUuUzoEkpGLNLPyvlJJ-g",
  authDomain: "job-task-7ed78.firebaseapp.com",
  projectId: "job-task-7ed78",
  storageBucket: "job-task-7ed78.appspot.com",
  messagingSenderId: "1030991650503",
  appId: "1:1030991650503:web:5d87a71bcc53c9a3ca68e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) 
export default auth ;