import logo from './logo.svg';
import './App.css';
//import signup from './signup';

//routing signup 
//not sure where to include this route...help!

// render() {
//   return <Router>
//   <Route path="/" components = {Signup} />
//   </Router>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, welcome to the community.<code></code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          L.E.N.A
        </a>
      </header>
    </div>
  );
}


export default App;
