import * as firebase from 'firebase';

const config = {

}

const expenses = [{
  description: 'gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  description: 'rent',
  note: '',
  amount: 109500,
  createdAt: 74945465465
}, {
  description: 'credit card',
  note: '',
  amount: 4500,
  createdAt: 46546546546
}];


firebase.initializeApp(config);

const database = firebase.database();

database.ref('notes').push({...expenses[0]});
database.ref('notes').push({...expenses[1]});
database.ref('notes').push({...expenses[2]});

// database.ref('notes').push({
//   title: 'React Native, Angular, Python',
//   body: 'Course Topics'
// });

// const firebaseNotes = {
//   notes: {
//     djaflsdjlf: {
//       body: 'This is my note', title: 'first note'
//     },
//     ajslkdf: {
//       body: 'This is my note', title: 'second note'
//     }
//   }
// };
//
// const notes = [{id: 12, body: 'This is my note', title: 'first note'}, {id: 761, body: 'This is my note', title: 'Another note'}];
//
// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });

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
