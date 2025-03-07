import React from "react";

class App extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <button onClick={this.increment}>
          Clicked To Count {this.state.count}
        </button>
      </div>
    );
  }
}

export default App;
