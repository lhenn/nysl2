import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar.js' ;
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Schedule from './components/Schedule.js';
import Locations from './components/Locations.js';
import Chat from './components/Chat.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Schedule} />
          <Route path='/locations' component={Locations} />
          <Route path='/chat' component={Chat} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
