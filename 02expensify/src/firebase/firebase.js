import * as firebase from 'firebase';

const config = {

}

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Anthony Zeng',
  age: 18,
  job: {
    title: 'Student',
    company: 'NYU'
  },
  location: {
    city: 'New York',
    country: 'United States'
  },
  stressLevel: 5
}).then(() => {
  console.log('data saved');
}).catch((e) => console.log(e));

database.ref().update({
  name: 'Jack',
  age: 20,
  stressLevel: 7,
  job: {
    title: 'Software Intern',
    company: 'Google'
  },
  'location/city': "San Francisco"
});
