class Header extends React.Component{
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>First React App</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render() {
    return (
      <div>
        <p>Options here</p>
      </div>
    );
  }
}

class AddOption extends React.Component{
  render() {
    return (
      <div>
        <button>Add option</button>
      </div>
    );
  }
}

const jsx =  (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)
ReactDOM.render(jsx, document.getElementById('app'));
