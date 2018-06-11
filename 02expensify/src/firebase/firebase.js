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


database.ref('age').set(18);
database.ref('location/city').set('Boston');

// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('data was removed')
// })
// .catch((e) => console.log('data was not removed'))
