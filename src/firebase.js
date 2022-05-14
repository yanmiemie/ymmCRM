import * as firebase from "firebase";
import "firebase/database"; 

let config = {  

  // apiKey: "AIzaSyDnVquQGd724SE39PdkZ1vs49Tki2Joums",
  // authDomain: "a8ask-4c2de.firebaseapp.com",
  // databaseURL: "https://a8ask-4c2de-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "a8ask-4c2de",
  // storageBucket: "a8ask-4c2de.appspot.com",
  // messagingSenderId: "424321311432",
  // appId: "1:424321311432:web:e1137966ad5bb04f853bfd",
  // measurementId: "G-25W3XV40CH"
  apiKey: "AIzaSyA8CMbaEFzfJj0u5gl9NovEGTFc28zMS8c",
  authDomain: "yanmieemie-onlinestore.firebaseapp.com",
  databaseURL: "https://yanmieemie-onlinestore-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "yanmieemie-onlinestore",
  storageBucket: "yanmieemie-onlinestore.appspot.com",
  messagingSenderId: "650373991694",
  appId: "1:650373991694:web:135f3982fdb89137135b5f",
  measurementId: "G-833EL637X2"
}; 

firebase.initializeApp(config);

export default firebase.database();
