// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Main from "./components/Home";
// import Login from "./components/UserAuth/Login";
// // import Profile from "./components/UserAuth/Profile";
// import Register from "./components/UserAuth/Register";
// function App() {
//   return (
//     <Router>
//       <Route exact path="/main" component={Main} />
//       <Route exact path="/" component={Login} />
//       {/* <Route exact path="/profile" component={Profile} /> */}
//       <Route exact path="/register" component={Register} />
//     </Router>
//   );
// }

// export default App;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/UserAuth/Navbar'
import Home from "./components/Home";
import Login from "./components/UserAuth/Login";
// import Profile from "./components/UserAuth/Profile";
import Register from "./components/UserAuth/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/login" component={Login} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/Home" component={Login} />
            <Route exact path="/main" component={Home} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
