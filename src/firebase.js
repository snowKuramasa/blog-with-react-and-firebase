// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqDlVdww9IuHhQYlzWrOKEvoAlW28nuq4",
  authDomain: "blog-with-react-and-fire-c64c5.firebaseapp.com",
  projectId: "blog-with-react-and-fire-c64c5",
  storageBucket: "blog-with-react-and-fire-c64c5.appspot.com",
  messagingSenderId: "857136179894",
  appId: "1:857136179894:web:41bf47407b2817dbf09417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//認証初期化
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, db };