class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibile: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibile: !prevState.visibile
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibile ? 'Hide details' : 'Show details'}</button>
        {this.state.visibile && <p>Here are the details on the app</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const app = {
//   title: 'Visibility Toggle',
//   details: <p>Here are the details of the app</p>,
//   visible: true
// }
//
// const onVisible = () => {
//   app.visible = !app.visible;
//   renderApp();
// }
//
// const appRoot = document.getElementById('app');
//
// const renderApp = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={onVisible}>{app.visible ? 'Hide details' : 'Show details'}</button>
//       {app.visible && app.details}
//     </div>
//   );
//
//   ReactDOM.render(template,appRoot);
// }
//
// renderApp();
//
