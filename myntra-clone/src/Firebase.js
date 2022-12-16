import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBJcnR07-qpFYlt8f4rl7r1cyoPT_TxoJc",
  authDomain: "test-myntra-39d3f.firebaseapp.com",
  projectId: "test-myntra-39d3f",
  storageBucket: "test-myntra-39d3f.appspot.com",
  messagingSenderId: "85704262138",
  appId: "1:85704262138:web:5ec57426363b5644916443",
});

export const db = firebase.firestore();

export const auth = app.auth();
export default app;




// apiKey: "AIzaSyCFtj3SP3-8VC5t6zpWpJjHsIE8quBywzE",
// authDomain: "direct-cast-6709-b0562.firebaseapp.com",
// projectId: "direct-cast-6709-b0562",
// storageBucket: "direct-cast-6709-b0562.appspot.com",
// messagingSenderId: "45558199044",
// appId: "1:45558199044:web:0ddaa83efb43a417929651",