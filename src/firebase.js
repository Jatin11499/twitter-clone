import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMfd8AKI2zA-VfjaMPK3CDguH2Q9YoIvI",
    authDomain: "twitter-clone-6a2d4.firebaseapp.com",
    databaseURL: "https://twitter-clone-6a2d4.firebaseio.com",
    projectId: "twitter-clone-6a2d4",
    storageBucket: "twitter-clone-6a2d4.appspot.com",
    messagingSenderId: "172672130513",
    appId: "1:172672130513:web:562ed06481df84375854f0",
    measurementId: "G-S408LVKJTE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;