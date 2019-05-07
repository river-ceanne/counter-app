import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>- Simple Counter App -</h1>
    </header>
  );
};

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  handleCounter = e => {
    let counter = e.target.value;
    this.setState({ counter });
    console.log(this.state);
  };

  handleClickMinus = e => {
    e.preventDefault();
    let counter = this.state.counter - 1;
    this.setState({ counter });
  };

  handleClickAdd = e => {
    e.preventDefault();
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClickMinus}>-</button>
        <button onClick={this.handleClickAdd}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content />
      </React.Fragment>
    );
  }
}

export default App;
