console.log('App.js is running');

// JSX - JavaScript XML
let template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </div>
);

let templateTwo = (
  <div>
    <h1>Anthony Zeng</h1>
    <p>Age: 18</p>
    <p>Location: Brooklyn</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
