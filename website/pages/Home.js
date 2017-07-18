import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './home.less';

class Home extends Component {
  render() {
    return (
      <div className={style.root}>
        <header className={style.header}>
          <div>SEA UI</div>
        </header>
        SEA UI
        <Link to="/components">Components</Link>
      </div>
    );
  }
}

export default Home;
