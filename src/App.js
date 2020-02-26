import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import Donate from './components/Donate';

class App extends Component {
  render() {
    return (      
          <React.Fragment>
            <Router>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/donate' component={Donate} />
            </Switch>
            </Router>
          </React.Fragment>
    );
  }
}
export default App;
