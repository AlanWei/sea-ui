import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, Components, ComponentBase } from './pages';
import { Button } from './components';
import './styles/index.less';

const PREFIXCLS = 'seaui';

class App extends Component {
  render() {
    const currentPath = window.location.pathname;
    const showHeaderFooter = currentPath === '/';
    return (
      <Router>
        <div>
          {showHeaderFooter ?
            <header className={`${PREFIXCLS}-header`}>
              <Link to="/"><span className={`${PREFIXCLS}-title`}>SEA MOBILE</span></Link>
              <ul className={`${PREFIXCLS}-menu`}>
                <li><Link to="/components">Components</Link></li>
              </ul>
            </header>
            :
            null
          }
          <Route exact path="/" component={Home} />
          <Route path="/components" component={Components} />
          <Route path="/component" component={ComponentBase} />
          <Route path="/component/button" component={Button} />
          {showHeaderFooter ?
            <footer className={`${PREFIXCLS}-footer`}>
              Copyright © 2017
            </footer>
            :
            null
          }
        </div>
      </Router>
    );
  }
}

export default App;
