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

let count = 0;
const addOne = () => {
  console.log('addOne');
}
const minusOne = () => {
  console.log('minusOne');
}
const reset = () => {
  console.log('rest');
}

const templateTwo = (
  <div>
    <h1>Count:{count} </h1>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>Reset</button>
    <button onClick={addOne}>+1</button>    
  </div>
);

console.log(templateTwo)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
