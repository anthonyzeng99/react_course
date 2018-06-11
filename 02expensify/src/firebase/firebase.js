import * as firebase from 'firebase';

const config = {

}

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
  const val = snapshot.val()
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching', e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(31);
// }, 10500);

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => console.log(e));

//
// database.ref().set({
//   name: 'Anthony Zeng',
//   age: 18,
//   job: {
//     title: 'Student',
//     company: 'NYU'
//   },
//   location: {
//     city: 'New York',
//     country: 'United States'
//   },
//   stressLevel: 5
// }).then(() => {
//   console.log('data saved');
// }).catch((e) => console.log(e));
//
// database.ref().update({
//   name: 'Jack',
//   age: 20,
//   stressLevel: 7,
//   job: {
//     title: 'Software Intern',
//     company: 'Google'
//   },
//   'location/city': "San Francisco"
// });
