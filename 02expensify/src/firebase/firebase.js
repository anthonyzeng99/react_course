import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDoWu9-tkjhb6CSpkd0_2AkT-mZYHih8H8",
   authDomain: "expensify-1c4b1.firebaseapp.com",
   databaseURL: "https://expensify-1c4b1.firebaseio.com",
   projectId: "expensify-1c4b1",
   storageBucket: "",
   messagingSenderId: "139369824162"
}

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Anthony Zeng',
  age: 18,
  isSingle: true,
  location: {
    city: 'New York',
    country: 'United States'
  }
}).then(() => {
  console.log('data saved');
}).catch((e) => console.log(e));


database.ref('age').set(18);
database.ref('location/city').set('Boston');

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('data was removed')
// })
// .catch((e) => console.log('data was not removed'))
