//Object

// const person = {
//   name: 'Anthony',
//   age: 26,
//   location: {
//     city: 'New York',
//     temp: 65
//   }
// }
//
// const {name: firstName = "Jim", age} = person;
// // const name = person.name;
// // const age = person.age;
//
// console.log(`${firstName} is ${age}`);
//
// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }
//
// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);

//Array

const address = ['123 Main St', 'Anytown', 'Anystate', '12345'];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} ${state}.`);

const menu = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [item, ,mediumPrice] = menu;

console.log(`A medium ${item} costs ${mediumPrice}`)
