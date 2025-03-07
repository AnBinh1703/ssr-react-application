import React, { useEffect } from "react";
// version 4 wwith function componet and usseEffect property
const App = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  // useEffect is a hook that allows you to perform side effects in function components
  // useEffect runs every time this is a change in the state of the component
  useEffect(() => {
    document.title = `Clicked ${count} times with useEffect`;
  });
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={increment}>Clicked To Count {count}</button>
    </div>
  );
};

//version 3 with class component
// class App extends React.Component {
//   state = { count: 0 };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   // no change in the document title
//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
//   // when i click the button the document title will change
//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times`;
//   }
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

//version 2 with functional component about useState property

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

//version 1 with class component about state
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
