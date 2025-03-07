import React, { useEffect } from "react";

const App = () => {
  //state
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
const [searchQuery, setSearchQuery] = React.useState("react");
  //fetching data from api
  const fetchData = () => {
    fetch(`http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
      .then(result => result.json())
      .then(data => {
        setNews(data.hits);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

const handleChange = (e) => {
  setSearchQuery(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  fetchData();
};

  useEffect(() => {
    fetchData();
  }, [searchQuery]); // Add searchQuery as dependency

  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>News</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
};

// version 4 wwith function componet and usseEffect property
// const App = () => {
//   const [count, setCount] = React.useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   // useEffect is a hook that allows you to perform side effects in function components
//   // useEffect runs every time this is a change in the state of the component
//   useEffect(() => {
//     document.title = `Clicked ${count} times with useEffect`;
//   });
//   return (
//     <div>
//       <h1>Counter App</h1>
//       <button onClick={increment}>Clicked To Count {count}</button>
//     </div>
//   );
// };

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
