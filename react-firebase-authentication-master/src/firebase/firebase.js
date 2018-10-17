import 'firebase/auth';
import 'firebase/database';

import firebase from 'firebase/app';

const prodConfig = {
};

const devConfig = {
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
