// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBETaVA-_Fv4Mt-SfkqrAxVxe9HVoEyBUE',
  authDomain: 'chat-web-app-11465.firebaseapp.com',
  databaseURL:
    'https://chat-web-app-11465-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-web-app-11465',
  storageBucket: 'chat-web-app-11465.appspot.com',
  messagingSenderId: '1015592402851',
  appId: '1:1015592402851:web:102544c8ad2eab42636416',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
