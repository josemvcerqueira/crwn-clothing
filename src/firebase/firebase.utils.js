import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyC6GWU8MJ8s_2RtrId0zrBVrXny-2LbC2A',
	authDomain: 'crwn-db-2db6b.firebaseapp.com',
	databaseURL: 'https://crwn-db-2db6b.firebaseio.com',
	projectId: 'crwn-db-2db6b',
	storageBucket: '',
	messagingSenderId: '949004710056',
	appId: '1:949004710056:web:22c461eb3f3f1c1f',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
