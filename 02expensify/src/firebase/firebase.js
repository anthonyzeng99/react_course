import * as firebase from 'firebase';

const config = {

};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Anthony'
});
