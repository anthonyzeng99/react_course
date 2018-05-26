console.log('App.js is running');


let app = {
  title: 'Indecision App',
  subtitle: 'My First React App'
}
// JSX - JavaScript XML
let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let user = {
  name: 'Anthony',
  age: 18,
  location: 'New York'
}
let templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
