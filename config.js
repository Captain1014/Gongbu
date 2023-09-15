import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQxWE9lJVmjYZHxzKiRbRrH3YHXsVVywo",
  authDomain: "quiz-2ed23.firebaseapp.com",
  projectId: "quiz-2ed23",
  storageBucket: "quiz-2ed23.appspot.com",
  messagingSenderId: "463687211136",
  appId: "1:463687211136:web:4810e0eead5984e77b2e65",
  measurementId: "G-2T8S05D204"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
