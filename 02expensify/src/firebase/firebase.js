import * as firebase from 'firebase';

const config = {

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


// database.ref('age').set(18);
// database.ref('location/city').set('Boston');
//


database.ref('attributes').set({
  height: 69,
  pounds: 179
}).then(() => {
  console.log('second set call worked');
}).catch((e) => console.log(e));
