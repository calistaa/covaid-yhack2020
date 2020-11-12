//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

// Importing functions to their files 
import Signup from './signup'
import Signin from './signin'

export default function App() {
  return (
    <div className="App">
        <Router>
        <Signup/>
      <Route exact path="/">
        <Redirect to="/Signup"/>
      </Route>

      <Router>
        <Signin/>
      <Route exact path="/">
        <Redirect to="/Signin"/>
      </Route>
      </Router>
      </Router>
</div>
  )
  }
//export default App;


// old-code below

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello, welcome to the community.<code></code> 
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           L.E.N.A
//         </a>
//       </header>
//     </div>
//   );
// }