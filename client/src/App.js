// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// function App() {
//   return (
//     <Router>
//       <Route exact path="/" component={HomePage} />
//     </Router>
//   );
// }

// export default App;
import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
// import Landing from './components/Landing'
import Login from './components/Login'
// import Register from './components/Register'
// import Profile from './components/Profile'
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Route exact path="/" component={Landing} /> */}
          <div className="container">
            {/* <Route exact path="/register" component={Register} /> */}
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/profile" component={Profile} /> */}
            <Route exact path="/home" component={Home} />

          </div>
        </div>
      </Router>
    )
  }
}


export default App;