console.log('App.js is running');

const app = {
  title: 'Indecision App',
  subtitle: 'My First React App',
  options: []
}

const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    renderApp();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" autoComplete="off"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template,appRoot);
}

renderApp();
