import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Components } from './pages';
import './styles/index.less';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Components} />
        </div>
      </Router>
    );
  }
}

export default App;
