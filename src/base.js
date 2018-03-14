import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXRua8GFULIcTtDIzhd6FTTD7A7xrEAGU",
  authDomain: "catch-of-the-day-kkato.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kkato.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;