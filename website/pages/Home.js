import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './home.less';

class Home extends Component {
  render() {
    return (
      <div className={style.root}>
        <header className={style.header}>
          <span className={style.title}>SEA UI MOBILE</span>
          <ul className={style.menu}>
            <li><Link to="/components">Components</Link></li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Home;
