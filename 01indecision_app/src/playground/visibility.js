const app = {
  title: 'Visibility Toggle',
  details: <p>Here are the details of the app</p>,
  visible: true
}

const onVisible = () => {
  app.visible = !app.visible;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={onVisible}>{app.visible ? 'Hide details' : 'Show details'}</button>
      {app.visible && app.details}
    </div>
  );

  ReactDOM.render(template,appRoot);
}

renderApp();
 
