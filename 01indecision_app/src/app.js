class IndecisionApp extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component  {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>First React App</h2>
      </div>
    );
  }
}

class Action extends React.Component  {
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options here
        <Option />
        <Option />
        Options here
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        Option Component
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add option</button>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
