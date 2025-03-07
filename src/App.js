import React from "react";

//version 3
class App extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // no change in the document title
  componentDidMount() {
    document.title = `Clicked ${this.state.count} times`;
  }
  // when i click the button the document title will change
  componentDidUpdate() {
    document.title = `Clicked ${this.state.count} times`;
  }
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

// //version 2

// const App =() => {
//  const [count, setCount] = React.useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   }
//   return (
//     <div>
//         <h1>Counter App</h1>
//          <button onClick={increment}>
//            Clicked To Count {count}
//          </button>
//     </div>
//   );
// }

//version 1
// class App extends React.Component {
//   state = { count: 0 };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter App</h1>
//         <button onClick={this.increment}>
//           Clicked To Count {this.state.count}
//         </button>
//       </div>
//     );
//   }
// }

export default App;
