import * as firebase from 'firebase';

const config = {
    // apiKey: "AIzaSyCykhCca8i1FcxBHcTRWV2oYL_VhVGc6pA",
    // authDomain: "expensify-3c4f8.firebaseapp.com",
    // databaseURL: "https://expensify-3c4f8.firebaseio.com",
    // projectId: "expensify-3c4f8",
    // storageBucket: "expensify-3c4f8.appspot.com",
    // messagingSenderId: "240897095596"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Anthony Zeng',
  age: 26,
  isSingle: true,
  location: {
    city: 'New York',
    country: 'United States'
  }
});

database.ref('age').set(18);
database.ref('location/city').set('London');
database.ref('location/country').set('United Kingdom');
database.ref('attributes').set({
  height: 69,
  pounds: 179
});
