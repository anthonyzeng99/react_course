console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'My First React App',
  options: []
}
// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length ? 'Here are your options' : 'No options'}
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

const user = {
  name: 'Anthony',
  age: 18,
  location: 'New York'
}

const getLocation = (location) => {
  if (location) {
    return <p>Location: {location}</p>
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
