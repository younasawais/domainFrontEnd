import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainNav from "./navigation/mainNav.jsx";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      test : "test"
     }
  }

  render() { 
    return ( 
      <React.Fragment>
          <BrowserRouter>
            <MainNav/>
          </BrowserRouter>
      </React.Fragment>
     );
  }
}

export default App;