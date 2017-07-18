import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Components } from './pages';
import './styles/index.less';

const PREFIXCLS = 'seaui';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header className={`${PREFIXCLS}-header`}>
            <span className={`${PREFIXCLS}-title`}>SEA UI MOBILE</span>
            <ul className={`${PREFIXCLS}-menu`}>
              <li><Link to="/components">Components</Link></li>
            </ul>
          </header>
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Components} />
          <footer className={`${PREFIXCLS}-footer`}>
            Copyright © 2017
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
